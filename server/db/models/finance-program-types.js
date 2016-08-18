/* eslint-disable comma-dangle */
const SqlTable = require('fluent-sql').SqlTable;

const Columns = [
    {name: 'dealer_services_title_followup_responsible_group_type_id' },
    {name: 'description' },
    {name: 'id' },
    {name: 'timestamp' },
];
const FinanceProgramTypes = new SqlTable({
    name: 'finance_program_types',
    columns: Columns
});
module.exports =  FinanceProgramTypes;
