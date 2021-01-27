const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('we sending shit over here look at me!')
})

module.exports = router;