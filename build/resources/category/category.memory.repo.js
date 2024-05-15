"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteByMenuId = exports.getByMenuId = exports.updateById = exports.create = exports.deleteById = exports.getById = exports.getAll = void 0;
const category_data_1 = __importDefault(require("../../data/category.data"));
const getAll = async () => category_data_1.default;
exports.getAll = getAll;
const create = async (category) => {
    category_data_1.default.push(category);
    return category;
};
exports.create = create;
const getById = async (id) => category_data_1.default.find((category) => category.id === id);
exports.getById = getById;
const getByMenuId = async (menuId) => category_data_1.default.filter((category) => category.menuId === menuId);
exports.getByMenuId = getByMenuId;
const deleteByMenuId = async (menuId) => {
    const indexToDelete = category_data_1.default.findIndex((category) => category.menuId === menuId);
    if (indexToDelete !== -1) {
        category_data_1.default.splice(indexToDelete, 1);
        return true;
    }
    return false;
};
exports.deleteByMenuId = deleteByMenuId;
const deleteById = async (id) => {
    const index = category_data_1.default.findIndex((category) => category.id === id);
    if (index !== -1) {
        category_data_1.default.splice(index, 1);
        return true;
    }
    return null;
};
exports.deleteById = deleteById;
const updateById = async (id, updatedCategory) => {
    const index = category_data_1.default.findIndex((category) => category.id === id);
    if (index !== -1) {
        category_data_1.default[index] = updatedCategory;
        return true;
    }
    return false;
};
exports.updateById = updateById;
//# sourceMappingURL=category.memory.repo.js.map