import { urlModel } from '../database/models';
import { getTopViewedUrlService } from './GetTopViewedUrlService';

describe('getTopViewedUrlService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the top viewed URLs sorted by clicks', async () => {
    const mockUrls = [
      { _id: '1', originalUrl: 'http://example1.com', shortUrl: 'short1', clicks: 100 },
      { _id: '2', originalUrl: 'http://example2.com', shortUrl: 'short2', clicks: 200 },
      { _id: '3', originalUrl: 'http://example3.com', shortUrl: 'short3', clicks: 50 },
    ];

    const findSpy = jest.spyOn(urlModel, 'find').mockReturnValue({
      sort: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue(mockUrls),
    } as any);

    const result = await getTopViewedUrlService();

    expect(findSpy).toHaveBeenCalled();
    expect(findSpy).toHaveBeenCalledWith();
    expect(urlModel.find().sort).toHaveBeenCalledWith({ clicks: -1 });
    expect(urlModel.find().sort().limit).toHaveBeenCalledWith(10);
    expect(urlModel.find().sort().limit(10).exec).toHaveBeenCalled();
    expect(result).toEqual(mockUrls);
  });

  it('should return an empty array if no URLs are found', async () => {
    const findSpy = jest.spyOn(urlModel, 'find').mockReturnValue({
      sort: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue([]),
    } as any);

    const result = await getTopViewedUrlService();

    expect(findSpy).toHaveBeenCalled();
    expect(urlModel.find().sort).toHaveBeenCalledWith({ clicks: -1 });
    expect(urlModel.find().sort().limit).toHaveBeenCalledWith(10);
    expect(urlModel.find().sort().limit(10).exec).toHaveBeenCalled();
    expect(result).toEqual([]);
  });
});
