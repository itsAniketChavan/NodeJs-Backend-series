const express = require('express')
const router = express.Router()
const {reviewSubmit} = require('../controller/reviewController')

router.post('/:id',reviewSubmit )

module.exports = router