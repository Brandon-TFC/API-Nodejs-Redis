const express = require('express');
const secure = require('./secure');

const response = require('../../../network/response');
const Controller = require('./index');
const controller = require('./controller');

const router = express.Router();

// Routes
router.get('/', list)


function list(req, res, next) {
    controller.list()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}

module.exports = router;