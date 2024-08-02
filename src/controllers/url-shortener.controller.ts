import { Request, Response } from 'express';
import { shortenUrlService } from '../services/ShortenUrlService';

export const shortenUrlController = async (request: Request, response: Response): Promise<Response> => {
  try {
    const { url, CUSTOM_ALIAS } = request.query

    const teste = await shortenUrlService()

    return response.status(200).json({});
  } catch (err: any) {
    return response.status(400).json({ error: err.message });
  }
}

export const retrieveUrlController = async (request: Request, response: Response): Promise<Response> => {
  try {
    const { shortUrl } = request.params;
    console.log("tete")
    const teste = await shortenUrlService()

    return response.status(200).json({});
  } catch (err: any) {
    return response.status(400).json({ error: err.message });
  }
};