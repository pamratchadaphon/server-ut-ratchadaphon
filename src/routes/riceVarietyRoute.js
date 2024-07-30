const riceVariety = require('../controllers/riceVarietyController')
const router = require('express').Router()

router.post('/', riceVariety.upload, riceVariety.create)
router.get('/', riceVariety.index)
router.get('/:riceVariety_id', riceVariety.show)
router.put('/edit1/:riceVariety_id',riceVariety.upload, riceVariety.update1)
router.put('/edit2/:riceVariety_id', riceVariety.update2)
router.delete('/:riceVariety_id', riceVariety.delete)


module.exports = router