const express = require('express')
const router = express.Router()
const helloController = require('../controllers/hello')
const expressValidator = require('express-validator')

router.get('/',(req, res) => {
    const response = helloController.helloWithASentence()
    res.json({
        message: response
    })
})

router.get('/:id', (req, res) => {
    res.json({
        message: `Bonjour hello ${req.params.id}`
    })
})


router.post('/', 
    expressValidator.body('name').isString(),
    expressValidator.body('message').isString()
, (req, res) => {
    const errors = expressValidator.validationResult(req)
    if (errors.isEmpty()) {
        res.json({ result: 'Everything is good'})
    } else {
        res.status(400).json({
            message: errors.array()
        })
    }
})

module.exports = router


// http://localhost:3002/hello/marc?toto=value