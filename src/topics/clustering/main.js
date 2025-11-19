import os from "os";
import path from "path";
import cluster from "cluster";

/* 
This module implements a load balancer that ensures that there are always NUM_CPU
number of NodeJS process replicas of server.js running on the current machine, that 
share incoming traffic's load. If some crash, this module dynamically creates 
replacement NodeJS processes to always maintain NUM_CPU replicas.
*/

/* 
Same end result can be achieved using pm2 package (process manager) and 
server.js file
*/

const cpuCount = os.cpus().length;
const curDir = import.meta.dirname;
const serverFile = "server.js";
const workerFile = path.join(curDir, serverFile);

console.log(`Worker file = ${workerFile}`);
console.log(`Number of CPUs = ${cpuCount}`);
console.log(`Load balancer PID = ${process.pid}`);

cluster.setupPrimary({
    exec: workerFile,
});

for(let i=0; i<cpuCount; i++) {
    cluster.fork();
}

cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} has been killed`);
    console.log("Starting another worker");
    cluster.fork();
});