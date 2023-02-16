// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '@/lib/connectDB';
import Entry from '@/models/entryModel';
import { create } from 'domain';
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
  // connectDB();

  //TODO remove stringify and try url encoded on the fetch. Check types number -> string

  if (req.method === 'GET') {
    res.status(200).json({
      remaining_entries: "10"
    })
  } else if (req.method === 'POST')  {

  if (!req.body.number || !req.body.date) {
    console.log(`The request body is ${req.body.number} ${req.body.date}`)
    console.log(`The request information: ${req}`)

  return res.status(400).json({ message: 'Number of entries or date nor found' })
  }

  connectDB();

  const createEntry = async () => await Entry.create(req.body);
  const getAllEntries = async () => await Entry.find({})
  console.log('CREATING DOCUMENT');

  try {
    createEntry()
    const totalEntries = Object.keys(getAllEntries).length
    console.log('CREATED DOCUMENT');
    return res.status(200).json({
      message: `${req.body.number} entry/entries recorded on ${req.body.date}`,
      remaining_entries: (10 - totalEntries).toString()
    })
  } catch (error) {
      console.log(error);
      return res.status(400).json({ message: `Database error: ${error}` })
    }
}
  }
