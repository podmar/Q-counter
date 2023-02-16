import { Schema, model, models, Types } from "mongoose";

const cardSchema = new Schema({
  userName: { type: String, required: [true, 'Please submit a valid user name.'] },
  date: { type: Date, default: Date.now },
  totalEntries: { type: Number, default: 10 },
  remainingEntries: { type: Number, default: 10 },
  usedEntries: [{ type: Types.ObjectId, ref: 'Entry' }],
  isActive: { type: Boolean, default: true },
});

const Card = models.Card || model("Card", cardSchema);

export default Card;