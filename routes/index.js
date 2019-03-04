const express = require('express')

const { blogpost } = require('../controllers')
const { swaggerSpec } = require('../config/swaggerSpec')
const router = express.Router()

router.post('/blogpost', blogpost.postBlogpost)

const swaggerUi = require('swagger-ui-express')
router.use('/docs', swaggerUi.serve)
router.get('/docs', swaggerUi.setup(swaggerSpec))

module.exports = router
