var logger = {
};

var shouldLog = true

logger.log = function(){
    if(log){
        console.log.apply(console, Array.prototype.slice.call(arguments));
    }
};

logger.setLog = function(){
    log = true;
};

logger.unsetLog = function(){
    log = false;
};

module.exports = logger;
