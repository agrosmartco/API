import { Router } from 'express';
import productscontroller from '../controller/productsController';

class productsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.get('/',productscontroller.getAllProducts);
        this.router.get('/:id',productscontroller.getProduct);
        this.router.post('/',productscontroller.createProduct);
        this.router.delete('/:id',productscontroller.deleteProduct);
        this.router.put('/:id',productscontroller.updateProduct)

    }

}

const productsroutes = new productsRoutes();

export default productsroutes.router;