import fs from "fs";
import dict from './_dict.js';

const read = async () => {
  fs.readFile("src/fs/files/fileToRead.txt", "utf8", (err, data) => {
    if (err) {
      throw new Error(dict.error);
    }

    console.log(data);
  });
};

await read();
