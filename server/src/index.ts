import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import productsRoutes from './routes/productsRoutes';
import loginRoutes from './routes/loginRoutes';
import productsSalesRoutes from './routes/productsSalesRoutes';

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
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes(): void {

        this.app.use(indexRoutes);
        this.app.use('/api/products', productsRoutes);
        this.app.use('/api/login', loginRoutes);
        this.app.use('/api/sales', productsSalesRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port'));

        })

    }
}

const server = new Server();

server.start();