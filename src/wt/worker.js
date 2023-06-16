import { workerData, parentPort } from "worker_threads";

const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
  const calculeteFibonacci = nthFibonacci(workerData);

  parentPort.postMessage(calculeteFibonacci);
};

sendResult();
