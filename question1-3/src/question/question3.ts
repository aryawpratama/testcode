const question3 = () => {
  const counts = [100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000];
  const goal = 23000;
  const amount = 3;
  let pembagi = 0;
  let puluhan = 0;
  let lastValue = 0;
  const result = [];
  do {
    if (lastValue === 0) {
      lastValue = goal;
    }
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
    if (puluhan === 0) {
      puluhan = absValue;
      result.push(puluhan);
    }
    amount === pembagi
      ? (lastValue = lastValue)
      : (lastValue = lastValue - absValue);
    lastValue !== 0 && result.push(lastValue);
    console.log(lastValue);
    console.log(result);
    pembagi += 1;
  } while (pembagi < amount);
};
export default question3;
