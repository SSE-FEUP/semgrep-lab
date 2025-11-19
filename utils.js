function writeLog(level, message) {
  if (level === "debug") {
    console.log("DEBUG: " + message);
  }
}

module.exports = { writeLog };
