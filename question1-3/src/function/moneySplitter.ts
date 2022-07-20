const moneySplitter = (goal: string, value: string) => {
  const counts = [100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000];
  let amount = +value;
  console.log("Input : ", new Array(+goal, amount));
  let pembagi = 0;
  let puluhan = 0;
  let lastValue = 0;
  const result = [];

  do {
    if (puluhan === 0) {
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
      puluhan = absValue;
      result.push(absValue);
      lastValue = lastValue - absValue;

      pembagi += 1;
      continue;
    }
    if (
      puluhan > 0 &&
      (lastValue / +`${10}e${lastValue.toString().length - 2}`) %
        (amount - pembagi) ===
        0
    ) {
      const data = lastValue / (amount - pembagi);
      Array.from({ length: amount - pembagi }).forEach(() => {
        result.push(data);
        pembagi += 1;
      });
      continue;
    }
    if (
      puluhan > 0 &&
      (lastValue / +`${10}e${lastValue.toString().length - 2}`) %
        (amount - pembagi) !==
        0
    ) {
      const data = counts.reduce((prev, curr) =>
        Math.abs(curr - lastValue) < Math.abs(prev - lastValue) ? curr : prev
      );
      console.log(data);

      let absValue = 0;
      if (lastValue < data) {
        const arrIndex = counts.findIndex((val) => data === val);
        absValue = counts[arrIndex - 1];
      } else {
        absValue = data;
      }
      result.push(absValue);
      lastValue = lastValue - absValue;
      pembagi += 1;
      continue;
    }
  } while (pembagi < amount);
  return result;
};
export default moneySplitter;
