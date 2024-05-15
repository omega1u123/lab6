"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const menuRepo = require('./menu.memory.repo');
const categoryRepo = require('../category/category.memory.repo');
const menu_model_1 = __importDefault(require("./menu.model"));
const getAll = () => menuRepo.getAll();
const getById = (id) => menuRepo.getById(id);
const deleteById = (id) => {
    menuRepo.deleteById(id);
    categoryRepo.deleteByMenuId(id);
    return true;
};
const create = (payload) => {
    const menu = new menu_model_1.default(payload);
    const menuCreated = menuRepo.create(menu);
    return menuCreated;
};
const updateById = (id, updatedMenu) => {
    const existingMenu = menuRepo.getById(id);
    if (!existingMenu) {
        return null;
    }
    console.log('updated menu id', updatedMenu);
    menuRepo.updateById(id, updatedMenu);
    return existingMenu;
};
const getCategories = (menuId) => {
    return categoryRepo.getByMenuId(menuId);
};
exports.default = { getAll, getById, deleteById, create, updateById, getCategories };
//# sourceMappingURL=menu.service.js.map