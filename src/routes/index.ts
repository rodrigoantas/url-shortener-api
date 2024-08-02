import { Router, Request, Response } from 'express';

const router = Router();

router.get("/test", async (request: Request, response: Response) => {
  return response.status(200).json({ test: 1 });
})

export default router