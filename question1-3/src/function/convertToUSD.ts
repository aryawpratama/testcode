import axios from "axios";
import colors from "colors";

const convertToUSD = async (amount: number, from: string) =>
  new Promise<any>((resolve, reject) => {
    colors.enable();
    axios({
      url: "https://www.frankfurter.app/latest",
      params: {
        amount,
        to: "USD",
        from,
      },
    })
      .then((data) => resolve(data))
      .catch(() => {
        console.log("Error".bgRed, "\n");
        console.log("Please input data correctly".red, "\n");
        reject();
      });
  });
export default convertToUSD;
