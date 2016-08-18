/* eslint-disable comma-dangle */
const SqlTable = require('fluent-sql').SqlTable;

const Columns = [
    { name: 'id' },
    { name: 'division_id' },
    { name: 'name' },
    { name: 'region_number' },
    { name: 'timestamp' },
    { name: 'vp_user_account_id' },
];
const Regions = new SqlTable({
    name: 'regions',
    columns: Columns
});
module.exports =  Regions;
