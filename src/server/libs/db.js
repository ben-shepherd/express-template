import mysql from 'mysql'
import config from '../config'

/**
 * Create Connection
 */
let db = mysql.createConnection({
    host: config.database.host,
    user: config.database.username,
    password: config.database.password,
    database: config.database.database
})

/**
 * Connect
 */
db.connect((err) => {
    if(err) {
        console.log('MySql Connection Error: ', err);
    }
});


/**
 * Perform a query
 * @param {*} sql 
 * @param {*} params 
 * @returns Array of results
 */
export const dbQuery = (sql, params) => {

    return new Promise((resolve, reject) => {
        
        let cb = (err, results) => {
            if(err) reject(err)
            else resolve(results)
        }

        if(typeof params == 'undefined') {
            db.query(sql, cb)
        }
        else {

            if(Array.isArray(params) == false) {
                params = [params]
            }

            db.query(sql, params, cb)
        }
    })
}

export default db 