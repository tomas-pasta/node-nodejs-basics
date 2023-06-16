import fs from 'fs';

const content = "I am fresh and young";
const error = "FS operation failed";

const create = async () => {
  fs.writeFile("src/fs/files/fresh.txt", content, (err) => {
    if (err) {
      throw new Error(error)
    }
  });
};

await create();
