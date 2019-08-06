import {Request,Response} from 'express';

class indexController{
    public index (req:Request, res:Response){
        res.send('hello')
    }
}

export const indexcontroller = new indexController();