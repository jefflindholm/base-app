/* eslint-disable comma-dangle */
const config = require('./config');
const Sequelize = require('sequelize');
const CircularJSON = require('circular-json');

const debug = true;
console.log(config);
const sqlServer = new Sequelize(config.database,
    config.user,
    config.password,
    {
        host: config.dbServer,
        dialect: 'mssql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        logging: debug ? console.log : false
    });

function executeComplexQuery(query) {
    const sql = query.genSql();
    console.log('sql', CircularJSON.stringify(sql, null, 2));
    try {
        const data = sqlServer.query(sql.fetchSql, {
            type: sqlServer.QueryTypes.SELECT,
            replacements: sql.values
        });
        const count = sqlServer.query(sql.countSql, {
            type: sqlServer.QueryTypes.SELECT,
            replacements: sql.values
        });
        return [data, count];
    } catch (err) {
        console.log(err);
    }
    return null;
}
function executeSimpleQuery(query) {
    const sql = query.genSql();
    console.log('sql', CircularJSON.stringify(sql, null, 2));
    try {
        const data = sqlServer.query(sql.fetchSql, {
            type: sqlServer.QueryTypes.SELECT,
            replacements: sql.values
        });
        return data;
    } catch (err) {
        console.log(err);
    }
    return null;
}

module.exports = {
    executeSimpleQuery,
    executeComplexQuery,
    sqlServer,
};
