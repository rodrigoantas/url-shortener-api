import { Request, Response } from 'express';

export const topViewedUrlController = async (request: Request, response: Response): Promise<Response> => {
  try {
    return response.status(200).json({});
  } catch (err: any) {
    return response.status(400).json({ error: err.message });
  }
}