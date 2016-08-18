/* eslint-disable comma-dangle */
const SqlTable = require('fluent-sql').SqlTable;

const Columns = [
    { name: 'address_line1' },
    { name: 'address_line2' },
    { name: 'city' },
    { name: 'customer_service_center_id' },
    { name: 'great_plains_branch_number' },
    { name: 'id' },
    { name: 'is_inside_lpo' },
    { name: 'is_tms_integrated' },
    { name: 'manager_user_account_id' },
    { name: 'name' },
    { name: 'number' },
    { name: 'office_fax' },
    { name: 'office_phone' },
    { name: 'open_date_time' },
    { name: 'region_id' },
    { name: 'risk_account_manager_user_account_id' },
    { name: 'sales_executive_user_account_id' },
    { name: 'sales_region_id' },
    { name: 'state_id' },
    { name: 'time_zone_id' },
    { name: 'timestamp' },
    { name: 'volume_size_range_id' },
    { name: 'zip' },
];
const Markets = new SqlTable({
    name: 'branches',
    columns: Columns
});
module.exports =  Markets;
