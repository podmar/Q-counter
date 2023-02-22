import connectDB from '@/lib/connectDB';
import Card from '@/models/cardModel';
import type { NextApiRequest, NextApiResponse } from 'next'

// type CardData = {
//   success: Boolean,
//   message?: String,
//   results?: any
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
                const activeCards = await Card.find({...body, isActive: true});
                res.status(200).json({ success: true, results: activeCards })
            } catch (error) {
                res.status(400).json({ success: false, error: error })

            }
            break;
        case 'POST':
    //TODO: save the new card id in user and return user in response or redo how the models are created
            try {
                const card = await Card.create(body);
                res.status(201).json({ success: true, results: card })
            } catch (error) {
                res.status(400).json({ success: false, error: error })
            }
            break;
        default:
            res.status(400).json({ success: false, message: `${method} not allowed on the route.`})
            break;
    }
}
