const express = require('express');
const router = express.Router();
const savedCtrl = require('../../controllers/api/saved');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', savedCtrl.index);
router.post('/', ensureLoggedIn, savedCtrl.create);
// router.delete('/:id', ensureLoggedIn, savedCtrl.delete);




module.exports = router;