import colors from "colors";
import question2 from "./question/question2";
import question1 from "./question/question1";
import question3 from "./question/question3";
(async () => {
  colors.enable();
  console.clear();
  await question1();
  console.clear();
  await question2();
  console.clear();
  await question3();
  console.log(
    `\n
  All done!! Thank you for reviewing my test. :)
  `.green
  );
})();
