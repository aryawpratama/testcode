const medianCalculator = (input: number[]) => {
  const length = input.length;
  const sortedInput = input.sort((a, b) => a - b);
  if (length % 2 === 0) {
    const middleValue = Math.floor(length / 2);
    return (sortedInput[middleValue] + sortedInput[middleValue - 1]) / 2;
  } else {
    const middleValue = Math.floor(length / 2);
    return sortedInput[middleValue];
  }
};

export default medianCalculator;
