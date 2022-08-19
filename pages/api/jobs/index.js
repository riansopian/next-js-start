// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { jobs } from '../../../data.js';

export default function handler(req, res) {
  const httpMethod = req.method;
  const {title, company, location} = req.body;

  switch(httpMethod){
    case 'GET':
          res.status(200).json(jobs);
          break
    case 'POST':
        res.status(200).json({
        title:title,
        company:company,
        location:location,
    });
    break
  default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${httpMethod} not allowed`)
  }
}

