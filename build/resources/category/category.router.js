"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const dish_model_1 = __importDefault(require("../dish/dish.model"));
const category_model_1 = __importDefault(require("./category.model"));
const category_service_1 = __importDefault(require("./category.service"));
const router = (0, express_1.Router)();
router.route('/')
    .get(async (_req, res) => {
    const categories = await category_service_1.default.getAll();
    res.json(categories.map((category) => category_model_1.default.toResponse(category)));
})
    .post(async (req, res) => {
    const { id, title, photo, isVisible, menuId } = req.body;
    const category = await category_service_1.default.create({ id, title, photo, isVisible, menuId });
    if (category) {
        res.status(http_status_codes_1.StatusCodes.CREATED).json(category_model_1.default.toResponse(category));
    }
    else {
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
});
router.route('/:categoryId')
    .get(async (req, res) => {
    const categoryId = req.params['categoryId'];
    console.log("category id: " + categoryId);
    const category = await category_service_1.default.getById(parseInt(categoryId));
    if (category) {
        res.json(category_model_1.default.toResponse(category));
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
    }
})
    .put(async (req, res) => {
    const categoryId = req.params['categoryId'];
    const { title, photo, isVisible, menuId } = req.body;
    const id = categoryId;
    console.log(isVisible);
    console.log({ title, photo, isVisible });
    const updatedCategory = await category_service_1.default.updateById(parseInt(categoryId), { id, title, photo, isVisible, menuId });
    if (updatedCategory) {
        res.json(category_model_1.default.toResponse(updatedCategory));
    }
    else {
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
})
    .delete(async (req, res) => {
    const categoryId = req.params['categoryId'];
    const categoryDeleted = await category_service_1.default.deleteById(parseInt(categoryId));
    if (categoryDeleted) {
        res.json(http_status_codes_1.StatusCodes.OK);
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
    }
});
router.route('/:categoryId/dishes')
    .get(async (req, res) => {
    const categoryId = req.params['categoryId'];
    const dishes = await category_service_1.default.getDishesByCategoryId(parseInt(categoryId));
    if (dishes) {
        res.json(dishes.map((dish) => dish_model_1.default.toResponse(dish)));
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Dishes not found' });
    }
});
exports.default = router;
//# sourceMappingURL=category.router.js.map