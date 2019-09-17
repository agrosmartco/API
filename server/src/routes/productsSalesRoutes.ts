import { Router } from 'express';
import productssalescontroller from '../controller/productsSalesController';


class productsSalesRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.get('/fruveg',productssalescontroller.getAllFruveg);
        this.router.get('/derivates',productssalescontroller.getAllDerivates);

    }
}


const productssalesroutes = new productsSalesRoutes();

export default productssalesroutes.router;