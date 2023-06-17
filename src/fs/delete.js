import fs from "fs";
import dict from './_dict.js';

const remove = async () => {
  fs.rm("src/fs/files/fileToRemove.txt", (err) => {
    if (err) {
      throw new Error(dict.error);
    }
  });
};

await remove();
