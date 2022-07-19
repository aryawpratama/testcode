import meanCalculator from "../function/meanCalculator";
import medianCalculator from "../function/medianCalculator";
import colors from "colors";
import prompt from "../helper/prompt";
interface IMeanMedianResult {
  mean: number;
  median: number;
}

const calculator = (question: number[]) => {
  console.log(
    `
Input : ${question.toString()}
    `.yellow
  );

  let calculateSection: number[] = [];
  let result: IMeanMedianResult[] = [];

  let lastValue: number;
  question.forEach((value, index) => {
    if (lastValue > value || index === question.length - 1) {
      if (index === question.length - 1) calculateSection.push(value);
      const data = {} as IMeanMedianResult;
      data.mean = meanCalculator(calculateSection);
      data.median = medianCalculator(calculateSection);
      result.push(data);
      if (index !== question.length - 1) {
        calculateSection = [];
        calculateSection.push(value);
        lastValue = value;
      }
    } else {
      calculateSection.push(value);
      lastValue = value;
    }
  });
  console.log(`Result :`.green, result, "\n");
};

const question1 = async () => {
  colors.enable();
  console.log(
    `
    I. Calculate Mean and Median
    `.yellow
  );
  const initialQuestion = [3, 4, 6, 17, 25, 21, 23];
  calculator(initialQuestion);
  const respond = ["Y", "y", "yes", "Yes"];
  const userRespond = await prompt("Want to try by your self? Y/N : ");
  if (respond.includes(userRespond)) {
    let isDone = false;
    do {
      const userInput = await prompt(
        "Input number (use space to separate between number) : "
      );
      const splittedValue = userInput.split(" ").map((val) => +val);
      if (splittedValue.length && !isNaN(splittedValue[0])) {
        calculator(splittedValue);
        const respondUser = await prompt("Try again? Y/N : ");
        isDone = respond.includes(respondUser);
      } else {
        console.log(
          "Please input number only or use space to separate number \n".bgRed
        );
        const respondUser = await prompt("Try again? Y/N : ");
        isDone = respond.includes(respondUser);
      }
    } while (isDone);
  }
};
export default question1;
