"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dish_data_1 = __importDefault(require("../../data/dish.data"));
const getAll = async () => dish_data_1.default;
const create = async (dish) => {
    dish_data_1.default.push(dish);
    console.log(dish_data_1.default);
    return dish;
};
const getById = async (id) => dish_data_1.default.find((dish) => dish.id === id);
const deleteById = async (id) => {
    const index = dish_data_1.default.findIndex((dish) => dish.id === id);
    if (index !== -1) {
        dish_data_1.default.splice(index, 1);
        return true;
    }
    return null;
};
const updateById = async (id, updatedDish) => {
    const index = dish_data_1.default.findIndex((dish) => dish.id === id);
    if (index !== -1) {
        dish_data_1.default[index] = updatedDish;
        return true;
    }
    return false;
};
const getByCategoryId = async (categoryId) => dish_data_1.default.filter((dish) => dish.categoryId === categoryId);
const deleteByCategoryId = async (categoryId) => {
    const indexToDelete = dish_data_1.default.findIndex((dish) => dish.categoryId === categoryId);
    if (indexToDelete !== -1) {
        dish_data_1.default.splice(indexToDelete, 1);
        return true;
    }
    return false;
};
exports.default = { getAll, getById, deleteById, create, updateById, getByCategoryId, deleteByCategoryId };
//# sourceMappingURL=dish.memory.repo.js.map