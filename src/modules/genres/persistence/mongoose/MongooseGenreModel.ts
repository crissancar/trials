import { model, Schema } from 'mongoose';

const schema = new Schema({
  _id: { type: String, default: undefined },
  id: { type: String, required: true },
  name: { type: String, required: true },
});

export const MongooseGenreModel = model('Genre', schema);
