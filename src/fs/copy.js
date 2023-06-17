import fs from "fs";
import dict from './_dict.js';

const copy = async () => {
  fs.cp("src/fs/files", "src/fs/copyDirFiles", { recursive: true }, (err) => {
    if (err) {
      throw new Error(dict.error)
    }
  });
};

await copy();
