import express from 'express';
import mainRoutes from './routes';
import cors from 'cors'
import * as dotenv from 'dotenv';
import { connectToDatabase } from './database';

dotenv.config();
connectToDatabase()
const app = express();
app.use(cors())
app.use(express.json());

app.use('/api', mainRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});