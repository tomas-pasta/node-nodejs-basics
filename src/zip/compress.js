import zlib from "zlib";
import fs from "fs";

const compress = async () => {
  const sourceFilePath = "src/zip/files/fileToCompress.txt";
  const destinationFilePath = "src/zip/files/archive.gz";

  try {
    // Проверка наличия исходного файла
    await fs.promises.access(sourceFilePath, fs.constants.F_OK);
  } catch (error) {
    console.log(`Файл ${sourceFilePath} не существует.`);
    return;
  }

  const gzip = zlib.createGzip();
  const read = fs.createReadStream(sourceFilePath);
  const write = fs.createWriteStream(destinationFilePath);

  read.pipe(gzip).pipe(write);
};

await compress();
