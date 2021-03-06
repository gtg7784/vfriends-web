import { NextApiRequest, NextApiResponse } from 'next'
import { portfolios } from 'utils/portfolio'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = _req.query;
    
    const portfolio = portfolios[parseInt(id as string)];

    if (!Array.isArray(portfolio)) {
      throw new Error(`Cannot find ${id}th portfolio data`)
    }

    res.status(200).json(portfolio)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
