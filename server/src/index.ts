import express, { Application } from 'express';
import morgan = require('morgan');
import indexRoutes from './routes/indexRoutes';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.port || 1337);
        this.app.use(morgan('dev'));
    }

    routes(): void {

        this.app.use(indexRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'),()=>{
            console.log('server on port', this.app.get('port'));
            
        })

    }
}

const server = new Server();

server.start();