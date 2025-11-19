import { parentPort, workerData } from 'worker_threads';

if (parentPort === null) {
    throw new Error("Parent port is null");
}

const { arr } = workerData;
let sum = 0;
for (const e of arr) {
    sum += e;
}

parentPort.postMessage(sum);