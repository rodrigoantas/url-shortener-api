
import shortid from 'shortid';
import { shortenUrlService } from "./ShortenUrlService";
import { urlModel } from "../database/models"
jest.mock("../database/models");
jest.mock('shortid');

describe('shortenUrlService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the short URL when a custom alias is provided and does not exist', async () => {
    jest.spyOn(urlModel, "findOne").mockResolvedValue(null)
    jest.spyOn(urlModel, "create").mockResolvedValue({} as any);
    const result = await shortenUrlService('http://example.com', 'customAlias');

    expect(urlModel.findOne).toHaveBeenCalledWith({ shortUrl: 'customAlias' });
    expect(urlModel.create).toHaveBeenCalledWith({
      originalUrl: 'http://example.com',
      shortUrl: 'customAlias',
    });
    expect(result).toEqual({
      alias: 'customAlias',
      url: 'http://localhost:3333/api/retrieve/customAlias',
      statistics: {
        time_taken: expect.any(String),
      },
    });
  });

  it('should throw an error when the custom alias already exists', async () => {
    jest.spyOn(urlModel, "findOne").mockResolvedValue({ shortUrl: 'customAlias' })

    await expect(shortenUrlService('http://example.com', 'customAlias')).rejects.toThrow(
      'CUSTOM ALIAS ALREADY EXISTS'
    );

    expect(urlModel.findOne).toHaveBeenCalledWith({ shortUrl: 'customAlias' });
    expect(urlModel.create).not.toHaveBeenCalled();
  });

  it('should generate a short URL when no custom alias is provided', async () => {
    jest.spyOn(shortid, "generate").mockReturnValue("generatedAlias")
    jest.spyOn(urlModel, "findOne").mockResolvedValue(null)

    const result = await shortenUrlService('http://example.com', '');

    expect(urlModel.create).toHaveBeenCalledWith({
      originalUrl: 'http://example.com',
      shortUrl: 'generatedAlias',
    });
    expect(result).toEqual({
      alias: 'generatedAlias',
      url: 'http://localhost:3333/api/retrieve/generatedAlias',
      statistics: {
        time_taken: expect.any(String),
      },
    });
  });
});


