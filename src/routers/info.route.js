const express = require('express')
const SampleAPI = require('../api/sample.api')

const router = express.Router()

router.get('/', SampleAPI.all)

module.exports = router
