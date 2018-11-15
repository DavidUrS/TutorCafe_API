const router = require('express').Router();
const peopleController = require('../controllers/people-controller');

router.get('/',peopleController.getPeoples);

router.post('/',peopleController.addPeople);

router.put('/:id', peopleController.updatePeople);

router.delete('/:id', peopleController.deletePeople);

module.exports = router;