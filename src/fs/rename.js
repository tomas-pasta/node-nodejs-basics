import fs from "fs";
import dict from './_dict.js';

const rename = async () => {
  fs.rename("src/fs/files/wrongFilename.txt", "src/fs/files/properFilename.md", (err) => {
    if (err) {
      throw new Error(dict.error);
    }
  });
};

await rename();
