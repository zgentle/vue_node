const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next);
});

router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next);
});

router.post('/deleteValue', (req, res, next) => {
  api.deleteValue(req, res, next);
});

router.post('/setValueByMongodb', (req, res, next) => {
  api.setValueByMongodb(req, res, next);
});

module.exports = router;