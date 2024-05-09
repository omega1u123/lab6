const { StatusCodes } = require('http-status-codes');
const router = require('express').Router({ mergeParams: true });
const Menu  = require('./menu.model.js');
const Category = require('./../category/category.model.js');
const menuService = require('./menu.service.js');

router.route('/').get(async (req, res) => {
  const menu = await menuService.getAll();
  res.json(menu.map(Menu.toResponse))
});

router.route('/').post(async (req, res) => {
  const { id, title, photo, isPublish } = req.body;

  const menu = await menuService.create({id, title, photo, isPublish});

  if (menu) {
    res.status(StatusCodes.CREATED).json(Menu.toResponse(menu));
  } else {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ code: 'BAD_REQUEST', msg: 'Bad request' });
  }

});

router.route('/:menuId').get(async (req, res) => {
  const { menuId } = req.params;
  console.log(menuId)
  const menu = await menuService.getById(menuId);
  if (menu) {
    res.json(Menu.toResponse(menu));
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
  }
});

router.route('/:menuId/categories').get(async (req, res) => {
  const { menuId } = req.params;
  const categories = await menuService.getCategories(menuId);
  if (categories) {
    res.json(Category.toResponse(categories));
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
  }
});

router.route('/:menuId').put(async (req, res) =>{
  const { menuId } = req.params;
  const {title, photo, isPublish } = req.body;
  const id = menuId;
  console.log({title, photo, isPublish })
  const menu = menuService.updateById(menuId, {id, title, photo, isPublish})
  if (menu) {
    res.json(Menu.toResponse(menu));
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
  }
});

router.route('/:menuId').delete(async (req, res) => {
  const { menuId} = req.params;
  const menu = menuService.deleteById(menuId);
  if (menu) {
    res.json(StatusCodes.OK);
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
  }

})

module.exports = router;
