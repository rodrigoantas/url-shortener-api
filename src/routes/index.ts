import { Router, Request, Response } from 'express';
import { retrieveUrlController, shortenUrlController } from '../controllers/url-shortener.controller';
import { topViewedUrlController } from '../controllers/url-status.controller';

const router = Router();

router.get("/ping", async (request: Request, response: Response) => {
  return response.status(200).send("Pong");
})

router.put('/create', shortenUrlController)
router.get('/retrieve/:shortUrl', retrieveUrlController)
router.get('/top', topViewedUrlController);

export default router