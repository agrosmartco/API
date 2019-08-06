import { ConnectionPool } from "mssql/msnodesqlv8";
import keys from './keys'

var connections: any = keys.database;

const pool = new ConnectionPool(connections);

pool.connect().then(connection => {
    pool.on('error', res => {

    })
    console.log('db SQLSERVER is connected');
});

export default pool;