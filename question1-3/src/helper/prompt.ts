import readline from "readline";
const prompt = (query: string) =>
  new Promise<string>((resolve) => {
    const input = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    input.question(query, (result) => {
      resolve(result);
      input.close();
    });
  });

export default prompt;
