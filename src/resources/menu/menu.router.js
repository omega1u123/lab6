import { Router } from 'express';

import Menu from './meun.model.js';
import * as menuService from './menu.service.js';

const router = Router();

router.route('/').get(async (req, res) => {
  const users = await menuService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Menu.toResponse));
});

export default router;
