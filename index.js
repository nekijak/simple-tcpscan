const net = require('net');

exports.run = options => {
  let client = new net.Socket();
  client.setTimeout(options.timeout || 1000);
  return new Promise((resolve, reject) => {
    const success = () => {
      client.destroy();
      resolve();
    };
    const fail = () => {
      client.destroy();
      reject();
    };
    client.on("connect", success);
    client.on("timeout", fail);
    client.on("error", fail);
    client.connect(options.port, options.host);
  });
};
