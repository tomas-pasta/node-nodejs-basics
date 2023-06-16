import zlib from "zlib";
import fs from "fs";

const decompress = async () => {
  const sourceFilePath = "src/zip/files/archive.gz";
  const destinationFilePath = "src/zip/files/fileToCompress.txt";

  try {
    // Проверка наличия исходного файла
    await fs.promises.access(sourceFilePath, fs.constants.F_OK);
  } catch (error) {
    console.log(`Файл ${sourceFilePath} не существует.`);
    return;
  }

  const unZip = zlib.createUnzip();
  const read = fs.createReadStream(sourceFilePath);
  const wrire = fs.createWriteStream(destinationFilePath);

  read.pipe(unZip).pipe(wrire);
};

await decompress();
