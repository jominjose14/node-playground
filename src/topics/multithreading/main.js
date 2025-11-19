import { Worker } from "worker_threads";

const createWorker = (arr) => {
    const promise = new Promise((resolve, reject) => {
        const worker = new Worker("./job.js", {
            workerData: {
                arr,
            }
        });

        worker.on("message", (result) => {
            resolve(result);
        });

        worker.on("error", (err) => {
            reject(err);
        });

        worker.on("exit", (exitCode) => {
            if (exitCode !== 0) {
                const err = `Worker exited with code ${exitCode}`;
                reject(err);
            }
        });
    });

    return promise;
};

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const n = arr.length;
const windowSize = 3;
const promises = [];

for (let i = 0; i < n; i += windowSize) {
    const start = i;
    const end = Math.min(i + windowSize, n);
    const promise = createWorker(arr.slice(start, end));
    promises.push(promise);
}

const results = await Promise.all(promises);
let sum = 0;
for (const val of results) {
    sum += val;
}
console.log(sum);
