import { Router } from 'express';
import loginController from '../controller/loginController';

class loginRoutes {

    public router: Router = Router();

    constructor() {

        this.config();

    }

    config(): void {

        this.router.post('/', loginController.getPerson);

    };

}

const loginroutes = new loginRoutes;

export default loginroutes.router;