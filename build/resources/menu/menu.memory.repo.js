"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateById = exports.create = exports.deleteById = exports.getById = exports.getAll = void 0;
const menu_data_1 = __importDefault(require("../../data/menu.data"));
const getAll = async () => menu_data_1.default;
exports.getAll = getAll;
const create = async (menu) => {
    menu_data_1.default.push(menu);
    console.log(menu_data_1.default);
    return menu;
};
exports.create = create;
const getById = async (id) => menu_data_1.default.find((menu) => menu.id === id);
exports.getById = getById;
const deleteById = async (id) => {
    const index = menu_data_1.default.findIndex((menu) => menu.id === id);
    if (index !== -1) {
        menu_data_1.default.splice(index, 1);
        return true;
    }
    return null;
};
exports.deleteById = deleteById;
const updateById = async (id, updatedMenu) => {
    const index = menu_data_1.default.findIndex(menu => menu.id === id);
    if (index !== -1) {
        menu_data_1.default[index] = updatedMenu;
        return true;
    }
    return false;
};
exports.updateById = updateById;
//# sourceMappingURL=menu.memory.repo.js.map