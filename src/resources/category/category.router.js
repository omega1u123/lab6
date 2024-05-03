import { Router } from 'express';

import Category from './category.model.js';
import * as categoryService from './category.service.js';

const router = Router();

router.route('/').get(async (req, res) => {
  const category = await categoryService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(category.map(Category.toResponse));
});

export default router;
