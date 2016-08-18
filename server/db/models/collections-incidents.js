/* eslint-disable comma-dangle */
const SqlTable = require('fluent-sql').SqlTable;

const Columns = [
    {name: 'assigned_to_user_account_id'},
    {name: 'business_id'},
    {name: 'business_is_delinquent_default'},
    {name: 'business_is_delinquent_legal'},
    {name: 'business_is_renegotiated'},
    {name: 'business_is_written_off'},
    {name: 'collections_incident_decision_id'},
    {name: 'collections_incident_method_id'},
    {name: 'collections_incident_status_id'},
    {name: 'comment'},
    {name: 'follow_up_date'},
    {name: 'id'},
    {name: 'incident_resolved'},
    {name: 'modified_by_user_account_id'},
    {name: 'modified_date'},
    {name: 'resolved_date'},
    {name: 'risk_contact_user_account_id'},
    {name: 'timestamp'},
    {name: 'trigger_date'},
];
const CollectionsIncidents = new SqlTable({
    name: 'collections_incidents',
    columns: Columns
});
module.exports =  CollectionsIncidents;
