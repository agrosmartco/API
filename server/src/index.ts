import express, { Application } from 'express';
import morgan = require('morgan');
import indexRoutes from './routes/indexRoutes';
import productsRoutes from './routes/productsRoutes';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.port || 8080);
        this.app.use(morgan('dev'));
    }

    routes(): void {

        this.app.use(indexRoutes);
        this.app.use('/api/products',productsRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'),()=>{
            console.log('server on port', this.app.get('port'));
            
        })

    }
}

const server = new Server();

server.start();