const meanCalculator = (input: number[]) => {
  let sumValue: number = 0;
  input.forEach((value) => {
    sumValue += value;
  });
  const mean = sumValue / input.length;
  return mean;
};

export default meanCalculator;
