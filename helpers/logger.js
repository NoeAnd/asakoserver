const fs = require('fs');



exports.addLog = function (message) {
    const file = 'dev';
    message = '[' + new Date() + ']' + message + '\n';
    fs.appendFile("logs/" + file + ".txt", message, (error) => {
        if(error) {
            throw error;
        } else {
            return true;
        }
    });
}