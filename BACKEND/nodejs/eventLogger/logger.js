const fs = require("fs");
const os = require("os");

const eventEmitter = require("events");

class Logger extends eventEmitter {
    log(message) {
        this.emit("message", {message});
    }
};

const logger = new Logger();
const logFile = "./eventlog.txt";

const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
    fs.appendFileSync(logFile, logMessage);
};


logger.on("message", logToFile);

setInterval(() => {
    const memoryUsage = (os.freemem() / os.totalmem()) * 100;
    logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}`);
}, 3000);


logger.log("Application Started");
logger.log("Application event occurred");