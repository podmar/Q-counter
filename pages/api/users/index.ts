import connectDB from '@/lib/connectDB';
import User from '@/models/userModel';
import type { NextApiRequest, NextApiResponse } from 'next'

// type UserData = {
//   success: Boolean,
//   message?: String,
//   results?: any
// }

connectDB();

export default async function handler(
    req: NextApiRequest,
    // res: NextApiResponse<UserData>
    res: NextApiResponse

) {

    const { method, body } = req;

    switch (method) {
        case 'GET':
            try {
                const users = await User.find({});
                res.status(200).json({ success: true, results: users })
            } catch (error) {
                res.status(400).json({ success: false, error: error })

            }
            break;
        case 'POST':
            try {
                const user = await User.create(body);
                res.status(201).json({ success: true, results: user })
            } catch (error) {
                res.status(400).json({ success: false, error: error })
            }
            break;
        default:
            res.status(400).json({ success: false})
            break;
    }
}
