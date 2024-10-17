import { SortStep } from "@/interfaces/interface";

export const bubbleSortStep = (
  arr: number[],
  step: SortStep,
  ascending: boolean = true,
): { sortedArray: number[]; step: SortStep } => {
  const sortedArray = [...arr];
  let { i, j } = step;

  j = j !== undefined ? j : 0;

  if (i < sortedArray.length - 1) {
    if (j < sortedArray.length - i - 1) {
      if (
        (ascending && sortedArray[j] > sortedArray[j + 1]) ||
        (!ascending && sortedArray[j] < sortedArray[j + 1])
      ) {
        [sortedArray[j], sortedArray[j + 1]] = [
          sortedArray[j + 1],
          sortedArray[j],
        ];
      }
      j++;
    } else {
      i++;
      j = 0;
    }
  }

  return { sortedArray, step: { i, j } };
};
