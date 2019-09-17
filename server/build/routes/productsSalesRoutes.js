"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsSalesController_1 = __importDefault(require("../controller/productsSalesController"));
class productsSalesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/fruveg', productsSalesController_1.default.getAllFruveg);
        this.router.get('/derivates', productsSalesController_1.default.getAllDerivates);
    }
}
const productssalesroutes = new productsSalesRoutes();
exports.default = productssalesroutes.router;
