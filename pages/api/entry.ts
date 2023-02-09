// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '@/middleware/mongoDBConfig';
// import Entry from '@/models/entryModel';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message?: string,
  remaining_entries?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.method === 'GET') {
    res.status(200).json({
      remaining_entries: "10"
    })
  } else if (req.method === 'POST')  {

  if (!req.body.number || !req.body.date) {
  console.log(req.body.number, req.body.date)
  return res.status(400).json({ message: 'Number of entries or date nor found' })
  }

  // try {
  //   console.log('CONNECTING TO MONGO');
  //   await connectDB();
  //   console.log('CONNECTED TO MONGO');

  //   console.log('CREATING DOCUMENT');
  //   const entry = await Entry.create(req.body);
  //   const allEntries = await Entry.find({})
  //   const totalEntries = Object.keys(allEntries).length
  //   console.log('CREATED DOCUMENT');

  //   res.status(200).json({
  //   message: `${req.body.number} entry/entries recorded on ${req.body.date}`,
  //   remaining_entries: (10 - totalEntries).toString()
  //   })
  // } catch (error) {
  //   console.log(error);
  //   return res.status(400).json({ message: `Database error: ${error}` })
  // }
}
  }
