import zlib from "zlib";
import fs from "fs";

const decompress = async () => {
    const unZip = zlib.createUnzip();

    const read = fs.createReadStream('src/zip/files/archive.gz')
    
    const wrire = fs.createWriteStream('src/zip/files/fileToCompress.txt')

    read.pipe(unZip).pipe(wrire);
};

await decompress();