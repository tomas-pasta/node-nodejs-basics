const parseArgs = () => {
  const args = process.argv.slice(2);
  const parsedArgs = {};

  for (let i = 0; i < args.length; i += 2) {
    const argName = args[i].replace(/^--/, "");
    const argValue = args[i + 1];
    parsedArgs[argName] = argValue;
  }

  Object.entries(parsedArgs).forEach(([key, value]) => {
    console.log(`${key} is ${value}`);
  });
};

parseArgs();
