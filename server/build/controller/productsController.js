"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = __importDefault(require("mssql"));
const database_1 = __importDefault(require("../database"));
class productsController {
    getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield database_1.default.request().query('SELECT codigo,descripcion,cantidad,precio,imagen FROM product');
                res.json(products.recordset);
            }
            catch (err) {
                res.json({ message: 'Error in the query table product' });
            }
        });
    }
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const product = yield database_1.default.request().input('id', mssql_1.default.VarChar, [id]).query('SELECT  codigo,descripcion,cantidad,precio,imagen FROM product WHERE codigo = @id');
                if (product.recordset.length > 0) {
                    res.json(product.recordset);
                }
                res.json({ text: 'Product not find' });
            }
            catch (err) {
                res.json({ message: 'Error in the query get one product' });
            }
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var codigo = req.body.codigo;
            var descripcion = req.body.descripcion;
            var cantidad = req.body.cantidad;
            var precio = req.body.precio;
            var imagen = req.body.imagen;
            console.log(codigo);
            console.log(descripcion);
            console.log(cantidad);
            console.log(precio);
            try {
                yield database_1.default.request()
                    .input('codigo', mssql_1.default.VarChar, [codigo])
                    .input('descripcion', mssql_1.default.VarChar, [descripcion])
                    .input('cantidad', mssql_1.default.VarChar, [cantidad])
                    .input('precio', mssql_1.default.VarChar, [precio])
                    .input('imagen', mssql_1.default.VarChar, [imagen])
                    .query('insert into product  (codigo,descripcion,cantidad,precio, imagen) values (@codigo,@descripcion,@cantidad,@precio, @imagen)');
                res.json({ message: 'Product Saved' });
            }
            catch (error) {
                res.json({ message: 'Error ' + req.body });
            }
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                console.log(id);
                yield database_1.default.request().input('id', mssql_1.default.VarChar, id).query('delete from product where codigo = @id');
                res.json({ message: 'Product deleted ' });
            }
            catch (error) {
                res.status(404).json({ text: 'Error in the procedure delete product' });
            }
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var descripcion = req.body.descripcion;
            var cantidad = req.body.cantidad;
            var precio = req.body.precio;
            console.log(descripcion);
            console.log(cantidad);
            console.log(precio);
            try {
                yield database_1.default.request()
                    .input('codigo', mssql_1.default.VarChar, id)
                    .input('descripcion', mssql_1.default.VarChar, [descripcion])
                    .input('cantidad', mssql_1.default.VarChar, [cantidad])
                    .input('precio', mssql_1.default.VarChar, [precio])
                    .query('update product set descripcion = @descripcion,cantidad = @cantidad,precio = @precio where codigo = @codigo');
                res.json({ text: 'updating a game ' + req.params.id });
            }
            catch (error) {
                res.json({ message: 'Error ' + req.body });
            }
        });
    }
}
const productscontroller = new productsController();
exports.default = productscontroller;
