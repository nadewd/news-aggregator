const express = require('express');
const router = express.Router();
const articlesCtrl = require('../../controllers/api/articles');

// GET /api/items
router.get('/', articlesCtrl.index);
// GET /api/items/:id
router.get('/:id', articlesCtrl.show);

module.exports = router;