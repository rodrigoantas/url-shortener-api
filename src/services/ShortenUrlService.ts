import { urlModel } from "../database/models"

import shortid from 'shortid';

export const shortenUrlService = async (url: string, CUSTOM_ALIAS: string) => {
  const startTime = Date.now();

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
    url: `http://localhost:3333/api/retrieve/${shortUrl}`,
    statistics: {
      time_taken: `${endTime - startTime}ms`
    }
  }
}
