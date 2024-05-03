import { Router } from 'express';

import Dish from './dish.model.js';
import * as dishService from './dish.service.js';

const router = Router();

router.route('/').get(async (req, res) => {
  const dish = await dishService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(dish.map(Dish.toResponse));
});

export default router;
