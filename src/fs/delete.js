import fs from "fs";

const error = "FS operation failed";

const remove = async () => {
  fs.rm("src/fs/files/fileToRemove.txt", (err) => {
    if (err) {
      throw new Error(error);
    }
  });
};

await remove();
