import { jobs } from '../../../data.js'

export default function handler(req, res) {
    const httpMethod = req.method;
    const { title, company, location } = req.body;
    const jobId = req.query.jobId;
    const result = jobs.filter((job) => job.id === parseInt(jobId));


    switch (httpMethod) {
        case 'GET':
            if (result.length > 0) {
                res.status(200).json(result[0]);
            } else {
                res.status(404).json({message:`Jobs with id: ${jobId} not found`})
            }
            break
        case 'PUT':
            //update the job ( TODO)
            res.status(200).json({
                title:title,
                company:company,
                location:location,
            });
            break
        case 'DELETE':
            //DELETE the job
            res.status(200).json(result[0]);
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${httpMethod} not allowed`)       
    } 
    
}