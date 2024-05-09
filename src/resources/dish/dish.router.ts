import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Dish from './dish.model';
import dishService from './dish.service';

const router = Router();

router.route('/').get(async (req: Request, res: Response) => {
  const dish = await dishService.getAll();
  res.json(dish.map(Dish.toResponse));
});

router.route('/').post(async (req: Request, res: Response) => {
  const { id, title, photo, isPublish, ingredients, price, categoryId } = req.body;

  const dish = await dishService.create({ id, title, photo, isPublish, ingredients, price, categoryId });

  if (dish) {
    res.status(StatusCodes.CREATED).json(Dish.toResponse(dish));
  } else {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ code: 'BAD_REQUEST', msg: 'Bad request' });
  }

});

router.route('/:dishId').get(async (req: Request, res: Response) => {
  const { dishId } = req.params;
  console.log(dishId)
  const dish = await dishService.getById(parseInt(dishId));
  if (dish) {
    res.json(Dish.toResponse(dish));
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'dish not found' });
  }
});


router.route('/:dishId').put(async (req: Request, res: Response) => {
  const { dishId } = req.params;
  const { title, photo, isPublish, ingredients, price, categoryId } = req.body;
  const id: number = parseInt(dishId);
  console.log({ title, photo, isPublish })
  const dish = dishService.updateById(parseInt(dishId), { id, title, photo, isPublish, ingredients, price, categoryId })
  if (dish) {
    res.json(Dish.toResponse(dish));
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
  }
});

router.route('/:dishId').delete(async (req: Request, res: Response) => {
  const { dishId } = req.params;
  const dish: boolean = dishService.deleteById(parseInt(dishId));
  if (dish) {
    res.json(StatusCodes.OK);
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'dish not found' });
  }

})

export default router;
