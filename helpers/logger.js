//External Modules
const fs = require('fs');

//Global constants
const LOGS_FORLDER_NAME = 'logs';
const LOGS_DEV_NAME     = 'dev';



exports.addLog = function (message) {
    message = '[' + new Date() + ']' + message + '\n';
    createFolder();
    fs.appendFile(LOGS_FORLDER_NAME + "/" + LOGS_DEV_NAME + ".txt", message, function (error) {
        if(error) {
            throw error;
        } else {
            return true;
        }
    });
};

var createFolder = function () {
    if (!fs.existsSync('./' + LOGS_FORLDER_NAME)){
        fs.mkdirSync(LOGS_FORLDER_NAME);
    }
};

