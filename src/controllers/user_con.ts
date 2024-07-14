import  express, { Request, Response} from 'express';
import * as UserServices from '../services/user_serv'
const router = express.Router();





router.post('/login', async(req : Request , res : Response) => {
    try {
        let data = req.body
        let test = await UserServices.CompareLogin(data);
        res.send({test : test});
    }catch(err) {
        res.status(400).send(err);
    }
})

export default router