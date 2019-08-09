"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = __importDefault(require("../controller/productsController"));
class productsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productsController_1.default.getAllProducts);
        this.router.get('/:id', productsController_1.default.getProduct);
        this.router.post('/', productsController_1.default.createProduct);
        this.router.delete('/:id', productsController_1.default.deleteProduct);
        this.router.put('/:id', productsController_1.default.updateProduct);
    }
}
const productsroutes = new productsRoutes();
exports.default = productsroutes.router;
