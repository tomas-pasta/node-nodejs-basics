import fs from "fs";

const error = "FS operation failed";

const rename = async () => {
  fs.rename("src/fs/files/wrongFilename.txt", "src/fs/files/properFilename.md", (err) => {
    if (err) {
      throw new Error(error);
    }
  });
};

await rename();
