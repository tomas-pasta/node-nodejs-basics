import fs from "fs";
import { createHash } from "node:crypto";

const error = "Data operation failed";

const calculateHash = async () => {
  fs.readFile('src/hash/files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
    if (err) {
      throw new Error(error)
    }
    
    const hash = createHash('sha256').update(data).digest('hex')

    console.log(hash);
  })
};

await calculateHash();
