const newsServiceController = require("../controllers/newsServiceController");
const router = require("express").Router();

router.post('/', newsServiceController.create);
router.get('/', newsServiceController.index);
router.get('/:newService_id', newsServiceController.show);
router.put('/:newService_id', newsServiceController.edit);
router.delete('/:newService_id', newsServiceController.delete);


module.exports = router;