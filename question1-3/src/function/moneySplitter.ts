const moneySplitter = (goal: string, value: string) => {
  const counts = [100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000];
  let amount = +value;
  console.log("Input : ", new Array(+goal, amount));
  let divider = 0;
  let initialValue = 0;
  let lastValue = 0;
  const result = [];

  do {
    if (initialValue === 0) {
      lastValue = +goal;
      const data = counts.reduce((prev, curr) =>
        Math.abs(curr - lastValue) < Math.abs(prev - lastValue) ? curr : prev
      );
      let absValue = 0;
      if (lastValue < data) {
        const arrIndex = counts.findIndex((val) => data === val);
        absValue = counts[arrIndex - 1];
      } else {
        absValue = data;
      }
      initialValue = absValue;
      result.push(absValue);
      lastValue = lastValue - absValue;

      divider += 1;
      continue;
    }
    if (
      initialValue > 0 &&
      (lastValue / +`${10}e${lastValue.toString().length - 2}`) %
        (amount - divider) ===
        0
    ) {
      const data = lastValue / (amount - divider);
      Array.from({ length: amount - divider }).forEach(() => {
        result.push(data);
        divider += 1;
      });
      continue;
    }
    if (
      initialValue > 0 &&
      (lastValue / +`${10}e${lastValue.toString().length - 2}`) %
        (amount - divider) !==
        0
    ) {
      const data = counts.reduce((prev, curr) =>
        Math.abs(curr - lastValue) < Math.abs(prev - lastValue) ? curr : prev
      );

      let absValue = 0;
      if (lastValue < data) {
        const arrIndex = counts.findIndex((val) => data === val);
        absValue = counts[arrIndex - 1];
      } else {
        absValue = data;
      }
      result.push(absValue);
      lastValue = lastValue - absValue;
      divider += 1;
      continue;
    }
  } while (divider < amount);
  return result;
};
export default moneySplitter;
