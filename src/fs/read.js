import fs from "fs";

const error = "FS operation failed";

const read = async () => {
  fs.readFile("src/fs/files/fileToRead.txt", "utf8", (err, data) => {
    if (err) {
      throw new Error(error);
    }

    console.log(data);
  });
};

await read();
