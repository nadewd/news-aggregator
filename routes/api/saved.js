const express = require('express');
const router = express.Router();
const savedCtrl = require('../../controllers/api/saved');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', savedCtrl.index);
router.post('/', ensureLoggedIn, savedCtrl.create);





module.exports = router;