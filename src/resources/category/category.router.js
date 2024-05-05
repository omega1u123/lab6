const router = require('express').Router({ mergeParams: true });

const Category = require('./category.model.js');
const categoryService = require('./category.service.js');

router.route('/').get(async (req, res) => {
  const category = await categoryService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(category.map(Category.toResponse));
});

module.export = router;
