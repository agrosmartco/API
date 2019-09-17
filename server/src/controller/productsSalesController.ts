import { Request, Response } from 'express';
import sql from 'mssql'
import pool from '../database';

class productsSalesController{

    public async getAllFruveg(req: Request, res: Response): Promise<void>{
        try {

            const fruveg = await pool.request().query('SELECT codigo,descripcion,cantidad,precio,imagen FROM product WHERE tipo in (1,2)')
            res.json(fruveg.recordset)
            
        } catch (error) {

            res.json({ message: 'Error get furveg' + error });
            
        }
    }

    public async getAllDerivates(req: Request, res: Response): Promise<void>{
        try {

            const derivates = await pool.request().query('SELECT codigo,descripcion,cantidad,precio,imagen FROM product WHERE tipo in (3)')
            res.json(derivates.recordset)
            
        } catch (error) {

            res.json({ message: 'Error get Derivates' + error });
            
        }
    }

}


const productssalescontroller = new productsSalesController();
export default productssalescontroller;