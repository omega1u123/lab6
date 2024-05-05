const app = require('./app');

const { PORT } = require('./common/config');

const port =4000

app.listen(port, () => console.log(`App is running on http://localhost:${port}`));
