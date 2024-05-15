"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dish_memory_repo_1 = __importDefault(require("./dish.memory.repo"));
const dish_model_1 = __importDefault(require("./dish.model"));
const getAll = () => dish_memory_repo_1.default.getAll();
const getById = (id) => dish_memory_repo_1.default.getById(id);
const create = (payload) => {
    const dish = new dish_model_1.default(payload);
    const dishCreated = dish_memory_repo_1.default.create(dish);
    return dishCreated;
};
const updateById = (id, updatedDish) => {
    const existingDish = dish_memory_repo_1.default.getById(id);
    if (!existingDish) {
        return null;
    }
    dish_memory_repo_1.default.updateById(id, updatedDish);
    return updatedDish;
};
const deleteById = (id) => {
    dish_memory_repo_1.default.deleteById(id);
    return true;
};
exports.default = { getAll, getById, create, updateById, deleteById };
//# sourceMappingURL=dish.service.js.map