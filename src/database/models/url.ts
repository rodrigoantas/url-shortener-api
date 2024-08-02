import { Document, model, Schema } from 'mongoose';
import { IUrl } from '../entities/Url';

interface UrlDocument extends Omit<IUrl, '_id'>, Document { }

const UrlSchema = new Schema<UrlDocument>({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
},
  {
    collection: 'urls',
    versionKey: false,
    timestamps: true
  }
);

export const urlModel = model<UrlDocument>('Board', UrlSchema, 'urls')