import axios from "axios";
import colors from "colors";
import convertToUSD from "../function/convertToUSD";
import prompt from "../helper/prompt";
interface IValue {
  amount: number;
  currency: string;
}
interface IAxiosRespond {
  amount: number;
  base: string;
  date: string;
  rates: {
    USD: number;
  };
}

const convert = async (inputData: IValue[]) => {
  console.log("Input : ".yellow, inputData, "\n");
  const result: number[] = [];
  console.log("Please wait...\n".cyan);
  for (const input of inputData) {
    const { data } = await convertToUSD(input.amount, input.currency);
    result.push((data as IAxiosRespond).rates.USD);
  }
  console.log("Result : ".green, result);
};

const question2 = async () => {
  colors.enable();
  console.log(
    `
    II. Convert Currency
    `.yellow
  );
  const initialValue: IValue[] = [
    { amount: 15000.0, currency: "IDR" },
    { amount: 3.1, currency: "EUR" },
  ];
  await convert(initialValue);
  const respond = ["Y", "y", "yes", "Yes"];
  const userRespond = await prompt("Want to try by your self? Y/N : ");
  if (respond.includes(userRespond)) {
    console.log(`
https://www.iban.com/currency-codes
Follow link above for currency letter document \n`);
    let isDone = false;
    do {
      const userInput = await prompt("How many input did you expect? : ");
      const userInputValue: IValue[] = [];
      const dummyArray = Array.from({ length: +userInput });
      for (const [index] of dummyArray.entries()) {
        const amount = +(await prompt(`Amount (${index + 1}) : `));
        const currency = await prompt(`Currency (${index + 1}) : `);
        userInputValue.push({ amount, currency });
      }
      if (userInputValue.length) {
        await convert(userInputValue).catch(async () => {
          const respondUser = await prompt("Try again? Y/N : ");
          isDone = respond.includes(respondUser);
        });
        const respondUser = await prompt("Try again? Y/N : ");
        isDone = respond.includes(respondUser);
      } else {
        console.log("Please input data correctly \n".bgRed);
        const respondUser = await prompt("Try again? Y/N : ");
        isDone = respond.includes(respondUser);
      }
    } while (isDone);
  }
};
export default question2;
