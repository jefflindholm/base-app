/* eslint-disable comma-dangle */
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(morgan('common'));
app.use(helmet());
app.use(cors());
app.use(compression());

const alive = require('./routes/alive');
const auth = require('./routes/auth');
const business = require('./routes/business');
const dram = require('./routes/dram');
app.use('/', alive);
app.use('/auth', auth);
app.use('/businesses', business);
app.use('/dram', dram);

// onst fs = require('fs');
// const https = require('https');
// const credentials = {
//     key: fs.readFileSync('server.key', 'utf8'),
//     cert: fs.readFileSync('server.crt', 'utf8')
// };
// https
//     .createServer(credentials, app)
//     .listen(3001, () => {
//         console.log('API running on port 3001')
//     });

app.listen(3001, () => {
    console.log('API running on port 3001');
});

module.exports = app;
