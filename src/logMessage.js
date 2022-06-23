import { log, error, getIp } from "./utils/index.js";
import { options } from "./index.js";

const logMessage = (currentPort, currentHost) => {
  const { port, protocol } = options;

  log("\nServing 🥟\n");
  log(`Local → ${protocol}://${currentHost}:${currentPort}\n`);
  log(`Network → ${protocol}://${getIp()}:${currentPort}\n`);
  if (currentPort != port) {
    error(`Port ${port} was in use.\n`);
  }
};

export default logMessage;
