import { Router } from 'express';
import productscontroller from '../controller/productsController';

class productsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.get('/',productscontroller.index);
        this.router.get('/:id',productscontroller.getProduct);
        this.router.post('/',productscontroller.createProduct);
        this.router.delete('/:id',productscontroller.deleteProduct);

    }

}

const productsroutes = new productsRoutes();

export default productsroutes.router;