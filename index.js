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

if (typeof define === 'function' && define.amd) {
    define("ed3-logger", logger);
} else if ('undefined' !== typeof exports && 'undefined' !== typeof module) {
    module.exports = logger;
}



