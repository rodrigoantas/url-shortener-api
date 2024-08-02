import { urlModel } from "../database/models"

export const shortenUrlService = async () => {
  const existingUrl = await urlModel.create({ shortUrl: "aaa", originalUrl: "teste" });
  console.log(existingUrl)
}
