import { Request, Response } from 'express';
import { shortenUrlService } from '../services/ShortenUrlService';
import { retrieveUrlService } from '../services/RetrieveUrlService';

export const shortenUrlController = async (request: Request, response: Response): Promise<Response> => {
  try {
    const { url, CUSTOM_ALIAS } = request.query

    console.log({ url })

    if (!url) {
      throw new Error("Url is required.")
    }

    const data = await shortenUrlService(url as string, CUSTOM_ALIAS as string)

    return response.status(200).json(data);
  } catch (err: any) {
    return response.status(400).json({ error: err.message });
  }
}

export const retrieveUrlController = async (request: Request, response: Response) => {
  try {
    const { shortUrl } = request.params;

    const data = await retrieveUrlService(shortUrl)
    response.redirect(data);
  } catch (err: any) {
    return response.status(400).json({ error: err.message });
  }
};