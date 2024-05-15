"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const dish_model_1 = __importDefault(require("./dish.model"));
const dish_service_1 = __importDefault(require("./dish.service"));
const router = (0, express_1.Router)();
router.route('/').get(async (_req, res) => {
    const dish = await dish_service_1.default.getAll();
    res.json(dish.map(dish_model_1.default.toResponse));
});
router.route('/').post(async (req, res) => {
    const { id, title, photo, isPublish, ingredients, price, categoryId } = req.body;
    const dish = await dish_service_1.default.create({ id, title, photo, isPublish, ingredients, price, categoryId });
    if (dish) {
        res.status(http_status_codes_1.StatusCodes.CREATED).json(dish_model_1.default.toResponse(dish));
    }
    else {
        res
            .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
            .json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
});
router.route('/:dishId').get(async (req, res) => {
    const dishId = req.params['dishId'];
    console.log(dishId);
    const dish = await dish_service_1.default.getById(parseInt(dishId));
    if (dish) {
        res.json(dish_model_1.default.toResponse(dish));
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'dish not found' });
    }
});
router.route('/:dishId').put(async (req, res) => {
    const dishId = req.params['dishId'];
    const { title, photo, isPublish, ingredients, price, categoryId } = req.body;
    const id = parseInt(dishId);
    console.log({ title, photo, isPublish });
    const dish = dish_service_1.default.updateById(parseInt(dishId), { id, title, photo, isPublish, ingredients, price, categoryId });
    if (dish) {
        res.json(dish_model_1.default.toResponse(dish));
    }
    else {
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
});
router.route('/:dishId').delete(async (req, res) => {
    const dishId = req.params['dishId'];
    const dish = dish_service_1.default.deleteById(parseInt(dishId));
    if (dish) {
        res.json(http_status_codes_1.StatusCodes.OK);
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'dish not found' });
    }
});
exports.default = router;
//# sourceMappingURL=dish.router.js.map