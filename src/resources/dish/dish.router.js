const router = require('express').Router({ mergeParams: true });
const Dish = require('./dish.model.js');
const dishService = require('./dish.service.js');


router.route('/').get(async (req, res) => {
  const dish = await dishService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(dish.map(Dish.toResponse));
});

module.export = router;
