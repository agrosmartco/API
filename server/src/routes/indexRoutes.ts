import { Router } from 'express';
import { indexcontroller } from '../controller/indexController';

class indexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }


    config(): void {

        this.router.get('/',indexcontroller.index);
    }
}


const indexroutes = new indexRoutes();

export default indexroutes.router;
