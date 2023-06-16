const prefix = "RSS_";

const parseEnv = () => {
  const rssVariables = Object.entries(process.env).filter(([key, value]) => key.startsWith(prefix));

  const formattedVariables = rssVariables.map(([key, value]) => `${key}=${value}`).join("; ");

  console.log(formattedVariables);
};

parseEnv();
