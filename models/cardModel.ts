import { Schema, model, models, Types } from "mongoose";

const cardSchema = new Schema({
  user: { type: Types.ObjectId, ref: 'Entry' , required: [true, 'Please submit a valid user name.'] },
  totalEntries: { type: Number, default: 10 },
  remainingEntries: { type: Number, default: 10 },
  usedEntries: [{ type: Types.ObjectId, ref: 'Entry' }],
  isActive: { type: Boolean, default: true },
}, {timestamps: true });

const Card = models.Card || model("Card", cardSchema);

export default Card;