const express = require('express');
// eslint-disable-next-line
const router = express.Router();

router.post('/login', (req, res) => {
    console.log('login', req.body);
    const data = { user: req.body.user, token: '233-123' };
    console.log('data', data);
    res.send(data);
});

router.post('/logout', (req, res) => {
    console.log('logout', req.body);
    res.send('logged out');
});

module.exports = router;
