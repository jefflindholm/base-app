/* eslint-disable comma-dangle */
const SqlTable = require('fluent-sql').SqlTable;

const Columns = [
    {name: 'dram_user_account_id'},
    {name: 'id'},
    {name: 'region_id'},
    {name: 'risk_admin_user_account_id'},
    {name: 'fram_user_account_id'},
    {name: 'dram_user_account_id'},
];
const RiskUserRegion = new SqlTable({
    name: 'risk_users_region_assignment',
    columns: Columns
});
module.exports =  RiskUserRegion;
