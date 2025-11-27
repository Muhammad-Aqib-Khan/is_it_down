import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { url } = await request.json();

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        // Add protocol if missing
        let targetUrl = url;
        if (!/^https?:\/\//i.test(url)) {
            targetUrl = 'https://' + url;
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const startTime = Date.now();

        try {
            const response = await fetch(targetUrl, {
                method: 'HEAD', // Try HEAD first for speed
                signal: controller.signal,
                headers: {
                    'User-Agent': 'IsItDownChecker/1.0'
                }
            });

            clearTimeout(timeoutId);
            const latency = Date.now() - startTime;

            return NextResponse.json({
                status: response.ok || response.status < 500 ? 'up' : 'down',
                latency,
                statusCode: response.status,
                url: targetUrl
            });

        } catch (error: any) {
            // If HEAD fails (e.g. 405 Method Not Allowed), try GET
            if (error.name !== 'AbortError') {
                try {
                    const controllerGet = new AbortController();
                    const timeoutIdGet = setTimeout(() => controllerGet.abort(), 5000);

                    const responseGet = await fetch(targetUrl, {
                        method: 'GET',
                        signal: controllerGet.signal,
                        headers: {
                            'User-Agent': 'IsItDownChecker/1.0'
                        }
                    });
                    clearTimeout(timeoutIdGet);
                    const latency = Date.now() - startTime;

                    return NextResponse.json({
                        status: responseGet.ok || responseGet.status < 500 ? 'up' : 'down',
                        latency,
                        statusCode: responseGet.status,
                        url: targetUrl
                    });
                } catch (getError) {
                    // Fall through to error handling
                }
            }

            clearTimeout(timeoutId);
            return NextResponse.json({
                status: 'down',
                latency: 0,
                statusCode: 0,
                url: targetUrl,
                error: 'Unreachable'
            });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
