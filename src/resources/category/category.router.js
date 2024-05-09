const router = require('express').Router({ mergeParams: true });
const { StatusCodes } = require('http-status-codes');
const Dish  = require('../dish/dish.model.js');
const Category  = require('./category.model.js');
const categoryService = require('./category.service.js');


router.route('/').get(async (req, res) => {
  const category = await categoryService.getAll();
  res.json(category.map(Category.toResponse))
});

router.route('/').post(async (req, res) => {
  const { id, title, photo, isVisible, menuId } = req.body;

  const category = await categoryService.create({ id, title, photo, isVisible, menuId });

  if (category) {
    res.status(StatusCodes.CREATED).json(Category.toResponse(category));
  } else {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ code: 'BAD_REQUEST', msg: 'Bad request' });
  }

});

router.route('/:categoryId').get(async (req, res) => {
  const { categoryId } = req.params;
  console.log(categoryId)
  const category = await categoryService.getById(categoryId);
  if (category) {
    res.json(Category.toResponse(category));
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
  }
});

router.route('/:categoryId/dishes').get(async (req, res) => {
  const { categoryId } = req.params;
  const dishes = await categoryService.getDishesByCategoryId(categoryId);
  if (dishes) {
    res.json(Dish.toResponse(dishes));
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'dishes not found' });
  }
});

router.route('/:categoryId').put(async (req, res) =>{
  const { categoryId } = req.params;
  const { title, photo, isVisible, menuId } = req.body;
  const id = categoryId;
  console.log(isVisible);
  console.log({title, photo, isVisible })
  const category = categoryService.updateById(categoryId, {id, title, photo, isVisible, menuId})
  if (category) {
    res.json(Category.toResponse(category));
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
  }
});

router.route('/:categoryId').delete(async (req, res) => {
  const { categoryId} = req.params;
  const category = categoryService.deleteById(categoryId);
  if (category) {
    res.json(StatusCodes.OK);
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'category not found' });
  }

})


module.exports = router;
