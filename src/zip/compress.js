import zlib from "zlib";
import fs from "fs";

const compress = async () => {
    const gzip = zlib.createGzip();

    const read = fs.createReadStream('src/zip/files/fileToCompress.txt')
    
    const wrire = fs.createWriteStream('src/zip/files/archive.gz')

    read.pipe(gzip).pipe(wrire);
};

await compress();
