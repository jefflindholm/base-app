const SqlQuery = require('fluent-sql').SqlQuery;

const Businesses = require('../db/models/businesses');
const CollectionsIncidents = require('../db/models/collections-incidents');
const CollectionsIncidentStatuses = require('../db/models/collections-incident-statuses');
const FinanceProgramTypes = require('../db/models/finance-program-types');
const Markets = require('../db/models/markets');
const UserAccount = require('../db/models/user-accounts');
const RiskUserRegion = require('../db/models/risk-user-region');
const Regions = require('../db/models/regions');

const executeSimpleQuery = require('../db/database').executeSimpleQuery;

function routes(app) {
    app.get('/', (req, res) => {
        res.json({ status: 'alive' });
    });
    app.get('/dram', (req, res, next) => {
        const query = new SqlQuery()
            .from(UserAccount)
            .select(UserAccount.firstName, UserAccount.lastName, UserAccount.id)
            .join(RiskUserRegion.on(RiskUserRegion.dramUserAccountId).using(UserAccount.id))
            .orderBy(UserAccount.lastName, UserAccount.firstName)
            .distinct();
        const promise = executeSimpleQuery(query);
        if ( promise ) {
            promise
                .then(values => {
                    res.send(values);
                })
                .catch(err => {
                    console.log(err);
                    next(err);
                });
        }
    });
    app.get('/dram/:id/incidents', (req, res, next) => {
        const query = new SqlQuery()
            .from(CollectionsIncidents)
            .select(
                     CollectionsIncidents.followUpDate.as('followUp')
                    , CollectionsIncidents.triggerDate.as('defaultDate')
                    , CollectionsIncidents.modifiedDate.as('lastWorked')
                )
            .join(Businesses.on(Businesses.id).using(CollectionsIncidents.businessId))
            .select(
                    Businesses.businessName
                    , Businesses.businessNumber
                    , Businesses.id.as('businessId')
                )
             .select(Markets.name.as('market'))
             .join(Markets.on(Markets.id).using(Businesses.branchId))
            .select(CollectionsIncidentStatuses.name.as('status'))
            .join(CollectionsIncidentStatuses.on(CollectionsIncidentStatuses.id).using(CollectionsIncidents.collectionsIncidentStatusId))
            .select(FinanceProgramTypes.description.as('financeType'))
            .join(FinanceProgramTypes.on(FinanceProgramTypes.id).using(Businesses.financeProgramTypeId))
            .where(CollectionsIncidents.assignedToUserAccountId.eq(req.params.id))
            ;

        const promise = executeSimpleQuery(query);
        if ( promise ) {
            promise
                .then(values => {
                    res.send(values);
                })
                .catch(err => {
                    console.log(err);
                    next(err);
                });
        }
    });

    app.get('/businesses/:id', (req, res, next) => {
        const directorAccount = UserAccount.as('u');
        const query = new SqlQuery()
            .from(Businesses)
            .select(
                    Businesses.businessName,
                    Businesses.businessNumber
            )
            .join(Markets.on(Markets.id).using(Businesses.branchId))
            .select(Markets.name.as('marketName'))
            .join(Regions.on(Regions.id).using(Markets.regionId))
            .select(Regions.name.as('regionName'))
            .join(directorAccount.on(directorAccount.id).using(Regions.vpUserAccountId))
            .select(directorAccount.firstName.as('directorFirstName'), directorAccount.lastName.as('directorLastName'))
            .where(Businesses.id.eq(req.params.id))
            ;

        const promise = executeSimpleQuery(query);
        if ( promise ) {
            promise
                .then(values => {
                    res.send(values);
                })
                .catch(err => {
                    console.log(err);
                    next(err);
                });
        }
    });
}

module.exports = routes;
