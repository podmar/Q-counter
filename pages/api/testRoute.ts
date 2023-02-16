import connectDB from '@/lib/connectDB';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string,
  req: any
}

connectDB();

export default async (req:NextApiRequest, res:NextApiResponse<Data>) => {
    res.json({message: "Test route functional.", req: req.body})
}