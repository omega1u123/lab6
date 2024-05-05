const { StatusCodes } = require('http-status-codes');
const router = require('express').Router({ mergeParams: true });
const Menu  = require('./menu.model.js');
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

})

module.exports = router;
