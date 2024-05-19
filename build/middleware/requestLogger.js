import morgan from 'morgan';
import logger from '../utils/logger.js';
const stream = {
    write: (message) => logger.info(message.trim())
};
const requestLogger = morgan('combined', { stream });
export default requestLogger;
//# sourceMappingURL=requestLogger.js.map