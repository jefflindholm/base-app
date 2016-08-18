const express = require('express');
// eslint-disable-next-line
const router = express.Router();

const SqlQuery = require('fluent-sql').SqlQuery;

const Businesses = require('../db/models/businesses');
const CollectionsIncidents = require('../db/models/collections-incidents');
const CollectionsIncidentStatuses = require('../db/models/collections-incident-statuses');
const FinanceProgramTypes = require('../db/models/finance-program-types');
const Markets = require('../db/models/markets');
const UserAccount = require('../db/models/user-accounts');
const RiskUserRegion = require('../db/models/risk-user-region');

const executeSimpleQuery = require('../db/database').executeSimpleQuery;

router.get('/', (req, res, next) => {
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
router.get('/:id/incidents', (req, res, next) => {
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

module.exports = router;
