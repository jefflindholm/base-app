const express = require('express');
// eslint-disable-next-line
const router = express.Router();

const SqlQuery = require('fluent-sql').SqlQuery;

const Businesses = require('../db/models/businesses');
const Markets = require('../db/models/markets');
const Regions = require('../db/models/regions');
const UserAccount = require('../db/models/user-accounts');

const { executeSimpleQuery, executeComplexQuery } = require('../db/database');

router.get('/', (req, res, next) => {
    const directorAccount = UserAccount.as('u');
    console.log('busines.get');
    const page = req.query.page || 1;
    const query = new SqlQuery()
        .from(Businesses)
        .select(
                Businesses.businessName,
                Businesses.businessNumber,
                Businesses.id.as('id')
        )
        .join(Markets.on(Markets.id).using(Businesses.branchId))
        .select(Markets.name.as('marketName'))
        .join(Regions.on(Regions.id).using(Markets.regionId))
        .select(Regions.name.as('regionName'))
        .join(directorAccount.on(directorAccount.id).using(Regions.vpUserAccountId))
        .select(directorAccount.firstName.as('directorFirstName'), directorAccount.lastName.as('directorLastName'))
        .page(page)
        .pageSize(50)
        .orderBy(Businesses.businessName);

    const promises = executeComplexQuery(query);
    if ( promises ) {
        Promise.all(promises)
            .then(values => {
                console.log(values);
                res.send(values);
            })
            .catch(err => {
                console.log(err);
                next(err);
            });
    }
});

router.get('/:id', (req, res, next) => {
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
        .where(Businesses.businessNumber.eq(req.params.id))
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
