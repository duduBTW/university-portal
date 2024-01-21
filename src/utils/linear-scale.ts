function linearScale(
  inputValue: number,
  inputRange: [number, number],
  outputRange: [number, number]
): number {
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;

  // Ensure the input value is within the input range
  const clampedInput = Math.min(Math.max(inputValue, inputMin), inputMax);

  // Calculate the scaled value
  const inputRangeSize = inputMax - inputMin;
  const outputRangeSize = outputMax - outputMin;
  const scale = outputRangeSize / inputRangeSize;
  const scaledValue = outputMin + (clampedInput - inputMin) * scale;

  return scaledValue;
}

export default linearScale;
