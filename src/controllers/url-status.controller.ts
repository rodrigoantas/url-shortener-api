import { Request, Response } from 'express';
import { getTopViewedUrlService } from '../services/GetTopViewedUrlService';

export const topViewedUrlController = async (request: Request, response: Response): Promise<Response> => {
  try {
    const mostViewdUrl = await getTopViewedUrlService()
    return response.status(200).json(mostViewdUrl);
  } catch (err: any) {
    return response.status(400).json({ error: err.message });
  }
}