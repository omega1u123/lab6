"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryRepo = require('./category.memory.repo');
const dish_memory_repo_1 = __importDefault(require("../dish/dish.memory.repo"));
const category_model_1 = __importDefault(require("./category.model"));
const getAll = () => categoryRepo.getAll();
const getById = (id) => categoryRepo.getById(id);
const create = (payload) => {
    const category = new category_model_1.default(payload);
    const categoryCreated = categoryRepo.create(category);
    return categoryCreated;
};
const updateById = (id, updatedCategory) => {
    const existingCategory = categoryRepo.getById(id);
    if (!existingCategory) {
        return null;
    }
    categoryRepo.updateById(id, updatedCategory);
    return updatedCategory;
};
const deleteById = (id) => {
    categoryRepo.deleteById(id);
    dish_memory_repo_1.default.deleteByCategoryId(id);
    return true;
};
const getDishesByCategoryId = (id) => dish_memory_repo_1.default.getByCategoryId(id);
exports.default = { getAll, getById, create, updateById, deleteById, getDishesByCategoryId };
//# sourceMappingURL=category.service.js.map