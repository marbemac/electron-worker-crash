const path = require('path')

let worker;
const createWorker = () => {
  if (worker) {
    worker.terminate();
    console.log('worker terminated');
  }

  worker = new Worker(path.resolve(__dirname, 'worker.js'))
}

setInterval(createWorker, 500);
