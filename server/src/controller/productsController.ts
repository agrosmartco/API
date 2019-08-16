import { Request, Response } from 'express';
import sql from 'mssql'
import pool from '../database';



class productsController {

    public async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await pool.request().query('SELECT codigo,descripcion,cantidad,precio,imagen FROM product')
            res.json(products.recordset)
        }
        catch (err) {
            res.json({ message: 'Error in the query table product' });
        }

    }

    public async getProduct(req: Request, res: Response): Promise<any> {

        try {
            const { id } = req.params;
            const product = await pool.request().input('id', sql.VarChar, [id]).query('SELECT  codigo,descripcion,cantidad,precio,imagen FROM product WHERE codigo = @id');
            if (product.recordset.length > 0) {
                res.json(product.recordset)
            }
            res.json({ text: 'Product not find' });

        } catch (err) {
            res.json({ message: 'Error in the query get one product' });
        }
    }


    public async createProduct(req: Request, res: Response): Promise<void> {


        var codigo = req.body.codigo
        var descripcion = req.body.descripcion
        var cantidad = req.body.cantidad
        var precio = req.body.precio
        var imagen = req.body.imagen

        console.log(codigo);
        console.log(descripcion);
        console.log(cantidad);
        console.log(precio);

        try {
            await pool.request()
                .input('codigo', sql.VarChar, [codigo])
                .input('descripcion', sql.VarChar, [descripcion])
                .input('cantidad', sql.VarChar, [cantidad])
                .input('precio', sql.VarChar, [precio])
                .input('imagen', sql.VarChar, [imagen])
                .query('insert into product  (codigo,descripcion,cantidad,precio, imagen) values (@codigo,@descripcion,@cantidad,@precio, @imagen)')
            res.json({ message: 'Product Saved' });

        } catch (error) {
            res.json({ message: 'Error ' + req.body });
        }


    }


    public async deleteProduct(req: Request, res: Response): Promise<any> {

        try {
            const { id } = req.params;
            console.log(id);

            await pool.request().input('id', sql.VarChar, id).query('delete from product where codigo = @id');

            res.json({ message: 'Product deleted ' });

        } catch (error) {
            res.status(404).json({ text: 'Error in the procedure delete product' });
        }
    }


    public async updateProduct(req: Request, res: Response): Promise<void> {

        const { id } = req.params;

        var descripcion = req.body.descripcion
        var cantidad = req.body.cantidad
        var precio = req.body.precio
        var imagen = req.body.imagen

        try {
            await pool.request()
                .input('codigo', sql.VarChar, id)
                .input('descripcion', sql.VarChar, [descripcion])
                .input('cantidad', sql.VarChar, [cantidad])
                .input('precio', sql.VarChar, [precio])
                .input('imagen', sql.VarChar, [imagen])

                .query('update product set descripcion = @descripcion,cantidad = @cantidad,precio = @precio,imagen = @imagen where codigo = @codigo');


            res.json({ text: 'updating a product on data base' + req.params.id });

        } catch (error) {
            res.json({ message: 'Error ' + req.body });
        }





    }


}

const productscontroller = new productsController();
export default productscontroller;