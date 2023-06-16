import { stdin, stdout } from "node:process";

const transform = async () => {
  stdin.on("data", (data) => {
    const transformedData = `${[...data.toString()].reverse().join("")}\n\n`;

    stdout.write(transformedData);
  });
};

await transform();
