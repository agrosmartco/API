import { Request, Response } from 'express';
import sql from 'mssql'
import pool from '../database';
import jwt from 'jsonwebtoken';


class loginController {

    public async getPerson(req: Request, res: Response): Promise<void> {

        var email = req.body.email
        var passw = req.body.password;

        try {
            const person = await pool.request()
                .input('email', sql.VarChar, email)
                .input('passw', sql.VarChar, passw)
                .query('SELECT persopercl FROM person WHERE persoemail = @email and persopassw = @passw');

            if (person.recordset.length > 0 && person.recordset.length < 2) {

                var persona = person.recordset;


                const token = jwt.sign({ persona }, 'secret');

                await res.status(200).json({ token, persona });

            }
            await res.status(404).json({ message: 'Error user not found' });

        } catch (error) {

            await res.json({ message: 'Error in the query get person' + error });

        }

    }


    public async getPerfil(req: Request, res: Response): Promise<void> {

    }

}

const logincontroller = new loginController;
export default logincontroller;