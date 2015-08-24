var requirejs = require("requirejs");
var logger = requirejs("./index").getLogger("main");

logger.info("info");
logger.debug("debug");
logger.error("error");
logger.warn("warn");
logger.log("log");
