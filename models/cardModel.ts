import mongoose, { Schema, model, models } from "mongoose";

const cardSchema = new Schema({
  date: { type: Date, default: Date.now },
  totalEntries: { type: Number, default: 10 },
  remainingEntries: { type: Number, default: 10 },
  usedEntries: [{ type: mongoose.Types.ObjectId, ref: 'Entry' }],
  isActive: { type: Boolean, default: true },
});

const Card = models.Card || model("Card", cardSchema);

export default Card;
