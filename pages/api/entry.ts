// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



type Data = {
  message: string,
  remaining_entries?: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if (req.body.number || !req.body.date) {
    return res.status(400).json({ message: 'Number of entries or date nor found' })
  }

  res.status(200).json({
    message: `${req.body.number} entry/entries recorded on ${req.body.date}`,
    remaining_entries: 10-req.body.number
  })

}
