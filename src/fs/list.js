import fs from "fs";

const error = "FS operation failed";

const list = async () => {
  fs.readdir("src/fs/files", (err, files) => {
    if (err) {
      throw new Error(error);
    }

    console.log(files);
  });
};

await list();
