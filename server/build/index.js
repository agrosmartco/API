const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);


// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// const express_1 = __importDefault(require("express"));
// const morgan = require("morgan");
// const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
// class Server {
//     constructor() {
//         this.app = express_1.default();
//         this.config();
//         this.routes();
//     }
//     config() {
//         this.app.set('port', process.env.port || 8080);
//         this.app.use(morgan('dev'));
//     }
//     routes() {
//         this.app.use(indexRoutes_1.default);
//     }
//     start() {
//         this.app.listen(this.app.get('port'), () => {
//             console.log('server on port', this.app.get('port'));
//         });
//     }
// }
// const server = new Server();
// server.start();
