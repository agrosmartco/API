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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class loginController {
    getPerson(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var email = req.body.email;
            var passw = req.body.password;
            try {
                const person = yield database_1.default.request()
                    .input('email', mssql_1.default.VarChar, email)
                    .input('passw', mssql_1.default.VarChar, passw)
                    .query('SELECT persopercl FROM person WHERE persoemail = @email and persopassw = @passw');
                if (person.recordset.length > 0 && person.recordset.length < 2) {
                    var persona = person.recordset;
                    const token = jsonwebtoken_1.default.sign({ persona }, 'secret');
                    yield res.status(200).json({ token, persona });
                }
                yield res.status(404).json({ message: 'Error user not found' });
            }
            catch (error) {
                yield res.json({ message: 'Error in the query get person' + error });
            }
        });
    }
    getPerfil(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
const logincontroller = new loginController;
exports.default = logincontroller;
