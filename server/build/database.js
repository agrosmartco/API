"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = require("mssql");
const keys_1 = __importDefault(require("./keys"));
var connections = keys_1.default.database;
const pool = new mssql_1.ConnectionPool(connections);
pool.connect().then(connection => {
    pool.on('error', res => {
    });
    console.log('db SQLSERVER is connected');
});
exports.default = pool;
