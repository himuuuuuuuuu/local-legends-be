const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    res.send('Local Legends Backend is healthy')

})

module.exports = router;