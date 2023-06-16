import { Worker } from "worker_threads";
import { cpus } from "os";

const numThreads = cpus().length;

const createWorkerThread = (workerData) => {
  return new Promise((resolve) => {
    const worker = new Worker("./src/wt/worker.js", { workerData });

    worker.on("message", (data) => resolve({ status: "resolved", data }));

    worker.on("error", () => resolve({ status: "error", data: null }));
  });
};

const performCalculations = async () => {
  const promises = [];

  for (let i = 0; i < numThreads; i++) {
    const workerData = 10 + i;
    const promise = createWorkerThread(workerData);
    promises.push(promise);
  }

  const results = await Promise.all(promises);

  console.log(results);
};

await performCalculations();
