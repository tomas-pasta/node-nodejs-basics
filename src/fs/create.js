import fs from 'fs';
import dict from './_dict.js';

const content = "I am fresh and young";

const create = async () => {
  fs.writeFile("src/fs/files/fresh.txt", content, (err) => {
    if (err) {
      throw new Error(dict.error)
    }
  });
};

await create();
