"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const menu_model_1 = __importDefault(require("./menu.model"));
const category_model_1 = __importDefault(require("../category/category.model"));
const menu_service_1 = __importDefault(require("./menu.service"));
const router = (0, express_1.Router)();
router.route('/')
    .get(async (_req, res) => {
    const menu = await menu_service_1.default.getAll();
    res.json(menu.map((menu) => menu_model_1.default.toResponse(menu)));
})
    .post(async (req, res) => {
    const { id, title, photo, isPublish } = req.body;
    const menu = await menu_service_1.default.create({ id, title, photo, isPublish });
    if (menu) {
        res.status(http_status_codes_1.StatusCodes.CREATED).json(menu_model_1.default.toResponse(menu));
    }
    else {
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
});
router.route('/:menuId')
    .get(async (req, res) => {
    const menuId = req.params['menuId'];
    console.log(menuId);
    const menu = await menu_service_1.default.getById(parseInt(menuId));
    if (menu) {
        res.json(menu_model_1.default.toResponse(menu));
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
    }
})
    .put(async (req, res) => {
    const menuId = req.params['menuId'];
    const { title, photo, isPublish } = req.body;
    const id = parseInt(menuId);
    console.log({ title, photo, isPublish });
    const updatedMenu = await menu_service_1.default.updateById(id, { id, title, photo, isPublish });
    if (updatedMenu) {
        res.json(menu_model_1.default.toResponse(updatedMenu));
    }
    else {
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
})
    .delete(async (req, res) => {
    const menuId = req.params['menuId'];
    const menuDeleted = await menu_service_1.default.deleteById(parseInt(menuId));
    if (menuDeleted) {
        res.json(http_status_codes_1.StatusCodes.OK);
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
    }
});
router.route('/:menuId/categories')
    .get(async (req, res) => {
    const menuId = req.params['menuId'];
    const categories = await menu_service_1.default.getCategories(parseInt(menuId));
    if (categories) {
        res.json(categories.map((category) => category_model_1.default.toResponse(category)));
    }
    else {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
    }
});
exports.default = router;
//# sourceMappingURL=menu.router.js.map