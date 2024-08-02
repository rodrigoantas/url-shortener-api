import { Request, Response } from 'express';

export const shortenUrlController = async (request: Request, response: Response): Promise<Response> => {
  try {
    const { url, CUSTOM_ALIAS } = request.query

    return response.status(200).json({});
  } catch (err: any) {
    return response.status(400).json({ error: err.message });
  }
}

export const retrieveUrlController = async (request: Request, response: Response): Promise<Response> => {
  try {
    const { shortUrl } = request.params;

    return response.status(200).json({});
  } catch (err: any) {
    return response.status(400).json({ error: err.message });
  }
};