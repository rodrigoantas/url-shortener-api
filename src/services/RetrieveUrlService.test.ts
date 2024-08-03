import { urlModel } from '../database/models';
import { retrieveUrlService } from './RetrieveUrlService';

jest.mock('../database/models', () => ({
  urlModel: {
    findOne: jest.fn(),
    findByIdAndUpdate: jest.fn(),
  },
}));

describe('retrieveUrlService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the original URL when the short URL is found', async () => {
    const mockUrl = {
      _id: '12345',
      originalUrl: 'http://example.com',
      clicks: 0,
    };

    jest.spyOn(urlModel, "findOne").mockResolvedValue(mockUrl)
    jest.spyOn(urlModel, "findByIdAndUpdate").mockResolvedValue({ ...mockUrl, clicks: 1 })

    const result = await retrieveUrlService('shortUrl');

    expect(urlModel.findOne).toHaveBeenCalledWith({ shortUrl: 'shortUrl' });
    expect(urlModel.findByIdAndUpdate).toHaveBeenCalledWith(mockUrl._id, { clicks: mockUrl.clicks + 1 });
    expect(result).toBe('http://example.com');
  });

  it('should throw an error when the short URL is not found', async () => {
    jest.spyOn(urlModel, "findOne").mockResolvedValue(null)

    await expect(retrieveUrlService('nonExistentShortUrl')).rejects.toThrow('SHORTENED URL NOT FOUND');

    expect(urlModel.findOne).toHaveBeenCalledWith({ shortUrl: 'nonExistentShortUrl' });
    expect(urlModel.findByIdAndUpdate).not.toHaveBeenCalled();
  });
});
