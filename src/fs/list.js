import fs from "fs";
import dict from './_dict.js';

const list = async () => {
  fs.readdir("src/fs/files", (err, files) => {
    if (err) {
      throw new Error(dict.error);
    }

    console.log(files);
  });
};

await list();
