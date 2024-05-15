"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menu_router_1 = __importDefault(require("./resources/menu/menu.router"));
const category_router_1 = __importDefault(require("./resources/category/category.router"));
const dish_router_1 = __importDefault(require("./resources/dish/dish.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Middleware для обработки запросов к корневому URL
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
// Подключаем маршрутизаторы для различных ресурсов
app.use('/menu', menu_router_1.default);
app.use('/category', category_router_1.default);
app.use('/dish', dish_router_1.default);
module.exports = app;
//# sourceMappingURL=app.js.map