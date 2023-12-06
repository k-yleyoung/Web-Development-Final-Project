const express = require('express')
const router = express.Router()
const entryController = require('../controllers/entryController')

router.route('/')
    .get(entryController.getAllEntrys)
    .post(entryController.createNewEntry)
    .patch(entryController.updateEntry)
    .delete(entryController.deleteEntry)

module.exports = router