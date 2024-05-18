import app from './app'; // Импортируем Express-приложение из файла app.ts

//import { PORT } from './common/config'; // Импортируем порт из common/config.ts

const port : number = 4000; // Устанавливаем порт для прослушивания

app.listen(port, () => console.log(`App is running on http://localhost:${port}`));
