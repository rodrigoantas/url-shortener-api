import { IUrl } from "../database/entities/Url";
import { urlModel } from "../database/models"

export const retrieveUrlService = async (shortUrl: string): Promise<IUrl["originalUrl"]> => {
  const url = await urlModel.findOne({ shortUrl });

  if (!url) {
    throw new Error("SHORTENED URL NOT FOUND")
  }
  await urlModel.findByIdAndUpdate(url._id, { clicks: url.clicks + 1 })

  return url.originalUrl
}
