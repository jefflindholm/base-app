/* eslint-disable comma-dangle */
const SqlTable = require('fluent-sql').SqlTable;

const Columns = [
    {name: 'branch_id'},
    {name: 'credit_limit_tolerance_level'},
    {name: 'email_address'},
    {name: 'first_name'},
    {name: 'id'},
    {name: 'is_active'},
    {name: 'is_system_user'},
    {name: 'last_name'},
    {name: 'middle_name'},
    {name: 'name_prefix_id'},
    {name: 'name_suffix_id'},
    {name: 'network_login'},
    {name: 'number'},
    {name: 'office_phone'},
    {name: 'timestamp'},
    {name: 'title'},
    {name: 'user_account_type_id'}
];

const UserAccount = new SqlTable({
    name: 'user_accounts',
    columns: Columns
});
module.exports =  UserAccount;
