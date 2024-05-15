import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Dish from '../dish/dish.model';
import Category from './category.model';
import categoryService from './category.service';

const router = Router();


router.route('/')
  .get(async (_req: Request, res: Response) => {
    const categories = await categoryService.getAll();
    res.json(categories.map((category: Category) => Category.toResponse(category)));
  })
  .post(async (req: Request, res: Response) => {
    const { id, title, photo, isVisible, menuId } = req.body;

    const category = await categoryService.create({ id, title, photo, isVisible, menuId });

    if (category) {
      res.status(StatusCodes.CREATED).json(Category.toResponse(category));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  });

router.route('/:categoryId')
  .get(async (req: Request, res: Response) => {
    const categoryId = req.params['categoryId'] as string;
    console.log("category id: " + categoryId)
    const category = await categoryService.getById(parseInt(categoryId));
    if (category) {
      res.json(Category.toResponse(category));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
    }
  })
  .put(async (req: Request, res: Response) => {
    const categoryId = req.params['categoryId'] as string;
    const { title, photo, isVisible, menuId } = req.body;
    const id = categoryId;
    console.log(isVisible);
    console.log({ title, photo, isVisible })
    const updatedCategory = await categoryService.updateById(parseInt(categoryId), { id, title, photo, isVisible, menuId });
    if (updatedCategory) {
      res.json(Category.toResponse(updatedCategory));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  })
  .delete(async (req: Request, res: Response) => {
    const categoryId = req.params['categoryId'] as string;
    const categoryDeleted = await categoryService.deleteById(parseInt(categoryId));
    if (categoryDeleted) {
      res.json(StatusCodes.OK);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
    }
  });

router.route('/:categoryId/dishes')
  .get(async (req: Request, res: Response) => {
    const categoryId = req.params['categoryId'] as string;
    const dishes = await categoryService.getDishesByCategoryId(parseInt(categoryId));
    if (dishes) {
      res.json(dishes.map((dish) => Dish.toResponse(dish)));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Dishes not found' });
    }
  });

export default router;
