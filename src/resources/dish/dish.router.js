const router = require('express').Router({ mergeParams: true });
const { StatusCodes } = require('http-status-codes');
const Dish = require('./dish.model.js');
const dishService = require('./dish.service.js');

router.route('/').get(async (req, res) => {
  const dish = await dishService.getAll();
  res.json(dish.map(Dish.toResponse))
});

router.route('/').post(async (req, res) => {
  const { id, title, photo, isPublish, ingridients, price, categoryId } = req.body;

  const dish = await dishService.create({ id, title, photo, isPublish, ingridients, price, categoryId } );

  if (dish) {
    res.status(StatusCodes.CREATED).json(Dish.toResponse(dish));
  } else {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ code: 'BAD_REQUEST', msg: 'Bad request' });
  }

});

router.route('/:dishId').get(async (req, res) => {
  const { dishId } = req.params;
  console.log(dishId)
  const dish = await dishService.getById(dishId);
  if (dish) {
    res.json(Dish.toResponse(dish));
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'dish not found' });
  }
});


router.route('/:dishId').put(async (req, res) =>{
  const { dishId } = req.params;
  const { title, photo, isPublish, ingridients, price, categoryId } = req.body;
  const id = dishId;
  console.log({title, photo, isPublish })
  const dish = dishService.updateById(dishId, { id, title, photo, isPublish, ingridients, price, categoryId })
  if (dish) {
    res.json(Dish.toResponse(dish));
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
  }
});

router.route('/:dishId').delete(async (req, res) => {
  const { dishId } = req.params;
  const dish = dishService.deleteById(dishId);
  if (dish) {
    res.json(StatusCodes.OK);
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'dish not found' });
  }

})

module.exports = router;
