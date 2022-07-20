import moneySplitter from "../function/moneySplitter";
import prompt from "../helper/prompt";
import colors from "colors";
const question3 = async () => {
  colors.enable();
  console.log(
    `
    III. Hitung berapa lembar uang
    `.yellow
  );
  const initialValue = [23000, 4];
  console.log("Input :".yellow, initialValue, "\n");
  const initialResult = moneySplitter(
    `${initialValue[0]}`,
    `${initialValue[1]}`
  );
  console.log("Result :".green, initialResult, "\n");
  const respond = ["Y", "y", "yes", "Yes"];
  const userRespond = await prompt("Want to try by your self? Y/N : ");
  if (respond.includes(userRespond)) {
    let isDone = false;
    do {
      const goal = await prompt("Input money value : ");
      const value = await prompt("Input divider : ");
      const result = moneySplitter(goal, value);
      console.log("Result : ".green, result);
      const respondUser = await prompt("Try again? Y/N : ");
      isDone = respond.includes(respondUser);
    } while (isDone);
  }
};
export default question3;
