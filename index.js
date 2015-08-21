define(function() {
    var MAX_LOG_MESSAGE_LENGTH = 300;

    var Logger = function(moduleName, suffix) {
      this.module = moduleName;
      this.suffix = suffix;
    };

    var trimMessage = function(msg) {
      msg = msg === 0 ? '0' : (msg || '').toString();
      return msg.length <= MAX_LOG_MESSAGE_LENGTH ? msg :
      (msg.substr(0, MAX_LOG_MESSAGE_LENGTH) + ' ... (message trimmed; ' + msg.length + ' symbols total)');
    };

    Logger.prototype = {
      _processMsg: function(msg) {
        return '[' + this.module + (this.suffix ? ':' + this.suffix : '') + ']: ' + trimMessage(msg);
      },
      error: function (msg) {
        console.error(this._processMsg(msg));
      },
      warn: function (msg) {
        console.warn(this._processMsg(msg));
      },
      info: function (msg) {
        console.info(this._processMsg(msg));
      },
      debug: function (msg) {
        // node compability
        if(console.debug){
            console.debug(this._processMsg(msg));
        } else {
            console.info(this._processMsg(msg));
        }
      },
    };

    var loggers = {}, 
        defaultLogger = new Logger('default');

    return {
      getLogger: function (module, suffix) {
        if (!module) {
          return defaultLogger;
        }
        var logger = loggers[module + suffix];
        if (!logger) {
          logger = new Logger(module, suffix);
          loggers[module + suffix] = logger;
        }
        return logger;
      }
    };
});
