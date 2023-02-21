import connectDB from '@/lib/connectDB';
import Card from '@/models/cardModel';
import Entry from '@/models/entryModel';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    success: Boolean,
    message?: String,
    results?: any
}

connectDB();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

//TODO remove stringify and try url encoded on the fetch. Check types number -> string
//TODO: the date is not being recorded correctly in the entry

    const { method, body } = req;

    switch (method) {
        case 'GET':
            res.status(200).json({
                success: true,
                results: 10
            })
        break;
    case 'POST':
        if (!req.body.card || !req.body.date) {
            res.status(400).json({ success: false, message: 'Card ID or date nor found.' })
        }

        try {
            const cardToUpdate = await Card.findById(body.card)
            if (cardToUpdate.remainingEntries > 0) {
                const entry = await Entry.create(body);
                cardToUpdate.remainingEntries = cardToUpdate.remainingEntries - 1;
                cardToUpdate.usedEntries.push(entry._id)
            if (cardToUpdate.remainingEntries == 0) {
                cardToUpdate.isActive = false;
            }
            await cardToUpdate.save()
            res.status(200).json({
                success: true,
                message: `Your entry on ${req.body.date} has been recorded.`,
                results: cardToUpdate
            })
            } else {
                res.status(400).json({ success: false, message: 'Your card is no longer active.' })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({ success: false, message: `Database error: ${error}` })
        }
        break;
    default:
        res.status(400).json({ success: false, message: `${method} not allowed on the route.`})
        break;
    }
}