import { urlModel } from "../database/models"

import shortid from 'shortid';
import { isValidUrl } from "../utils";

export const shortenUrlService = async (url: string, CUSTOM_ALIAS: string) => {
  const startTime = Date.now();

  //  This validation could be a Joi, but i don't think it's a good idea to
  //  add a library just for one validation.
  const isValid = isValidUrl(url)
  if (!isValid) {
    throw new Error("Url must start with http:// or https://")
  }

  if (CUSTOM_ALIAS && typeof CUSTOM_ALIAS === 'string') {
    const existingUrl = await urlModel.findOne({ shortUrl: CUSTOM_ALIAS });
    if (existingUrl) {
      throw new Error("CUSTOM ALIAS ALREADY EXISTS")
    }
  }

  const shortUrl = CUSTOM_ALIAS || shortid.generate()

  await urlModel.create({
    originalUrl: url,
    shortUrl: shortUrl
  })

  const endTime = Date.now();

  return {
    alias: shortUrl,
    url: `http://localhost:3333/u/${shortUrl}`,
    statistics: {
      time_taken: `${endTime - startTime}ms`
    }
  }
}
