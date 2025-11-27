import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const response = await axios.get(url, { timeout: 5000 });
    res.status(200).json({ status: 'online', code: response.status });
  } catch (error: any) {
    if (error.response) {
      res.status(200).json({ status: 'online', code: error.response.status });
    } else {
      res.status(200).json({ status: 'offline', code: null });
    }
  }
}
