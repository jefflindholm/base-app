/* eslint-disable comma-dangle */
const SqlTable = require('fluent-sql').SqlTable;

const Columns = [
    {name: 'id' },
    {name: 'name' },
    {name: 'timestamp' },
];
const CollectionsIncidentStatuses = new SqlTable({
    name: 'collections_incident_statuses',
    columns: Columns
});
module.exports =  CollectionsIncidentStatuses;
