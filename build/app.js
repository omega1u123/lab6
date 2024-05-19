import express from 'express';
import menuRouter from "./resources/menu/menu.router";
import categoryRouter from "./resources/category/category.router";
import dishRouter from "./resources/dish/dish.router";
const app = express();
app.use(express.json());
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use('/menu', menuRouter);
app.use('/category', categoryRouter);
app.use('/dish', dishRouter);
export default app;
//# sourceMappingURL=app.js.map