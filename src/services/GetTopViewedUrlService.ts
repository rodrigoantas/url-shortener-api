import { urlModel } from "../database/models"

export const getTopViewedUrlService = async () => {
  const url = await urlModel.find().sort({ clicks: -1 }).limit(10).exec()

  return url
}
