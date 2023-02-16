import connectDB from '@/lib/connectDB';
import Card from '@/models/cardModel';
import type { NextApiRequest, NextApiResponse } from 'next'

// type CardData = {
//   message?: string,
// }

connectDB();

export default async function handler(
    req: NextApiRequest,
    // res: NextApiResponse<CardData>
    res: NextApiResponse

) {

    const { method, body } = req;

    switch (method) {
        case 'GET':
            try {
                const cards = await Card.find({});
                res.status(200).json({ success: true, result: cards })
            } catch (error) {
                res.status(400).json({ success: false, error: error })

            }
            break;
        case 'POST':
            try {
                const card = await Card.create(body);
                res.status(201).json({ success: true, result: card })
            } catch (error) {
                res.status(400).json({ success: false, error: error })
            }
            break;
        default:
            res.status(400).json({ success: false})
            break;
    }
}
