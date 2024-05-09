import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Menu from './menu.model';
import Category from '../category/category.model';
const menuService = require('./menu.service');

const router = Router();

router.route('/')
  .get(async (req: Request, res: Response) => {
    const menu = await menuService.getAll();
    res.json(menu.map((menu: Menu) => Menu.toResponse(menu)));
  })
  .post(async (req: Request, res: Response) => {
    const { id, title, photo, isPublish } = req.body;

    const menu = await menuService.create({ id, title, photo, isPublish });

    if (menu) {
      res.status(StatusCodes.CREATED).json(Menu.toResponse(menu));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  });

router.route('/:menuId')
  .get(async (req: Request, res: Response) => {
    const { menuId } = req.params;
    console.log(menuId)
    const menu = await menuService.getById(parseInt(menuId));
    if (menu) {
      res.json(Menu.toResponse(menu));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
    }
  })
  .put(async (req: Request, res: Response) => {
    const { menuId } = req.params;
    const { title, photo, isPublish } = req.body;
    const id = parseInt(menuId);
    console.log({ title, photo, isPublish })
    const updatedMenu = await menuService.updateById(id, { id, title, photo, isPublish });
    if (updatedMenu) {
      res.json(Menu.toResponse(updatedMenu));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  })
  .delete(async (req: Request, res: Response) => {
    const { menuId } = req.params;
    const menuDeleted = await menuService.deleteById(parseInt(menuId));
    if (menuDeleted) {
      res.json(StatusCodes.OK);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
    }
  });

router.route('/:menuId/categories')
  .get(async (req: Request, res: Response) => {
    const { menuId } = req.params;
    const categories = await menuService.getCategories(parseInt(menuId));
    if (categories) {
      res.json(categories.map((category: Category) => Category.toResponse(category)));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
    }
  });

export default router;
