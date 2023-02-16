import { Schema, model, models, Types } from "mongoose";

const cardSchema = new Schema({
  date: { type: Date, default: Date.now },
  totalEntries: { type: Number, default: 10 },
  remainingEntries: { type: Number, default: 10 },
  usedEntries: [{ type: Types.ObjectId, ref: 'Entry' }],
  isActive: { type: Boolean, default: true },
});

const Card = models.Card || model("Card", cardSchema);

export default Card;