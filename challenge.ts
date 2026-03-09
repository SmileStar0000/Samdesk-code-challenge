function isSafe(report: string): boolean {
  const numbers: number[] = report.split(' ').map(Number);

  const diffs: number[] = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    diffs.push(numbers[i + 1] - numbers[i]);
  }

  const allPositive: boolean = diffs.every(d => d > 0);
  const allNegative: boolean = diffs.every(d => d < 0);

  if (!allPositive && !allNegative) return false;

  return diffs.every(d => Math.abs(d) >= 1 && Math.abs(d) <= 3);
}

// Example usage
const reports: string[] = [
  "7 6 4 2 1",
  "1 2 7 8 9",
  "9 7 6 2 1",
  "1 3 2 4 5",
  "8 6 4 4 1",
  "1 3 6 7 9"
];

const safeCount: number = reports.filter(isSafe).length;
console.log(`Safe reports: ${safeCount}`); // Output: Safe reports: 2