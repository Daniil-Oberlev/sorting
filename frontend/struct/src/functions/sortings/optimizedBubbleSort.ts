import { SortStep } from "@/interfaces/interface";

export const optimizedBubbleSortStep = (
  arr: number[],
  step: SortStep,
  ascending: boolean = true,
): { sortedArray: number[]; step: SortStep } => {
  const sortedArray = [...arr];
  let { i, j } = step;

  if (i >= sortedArray.length - 1) {
    return { sortedArray, step: { i, j: 0 } };
  }

  j = j !== undefined ? j : 0;

  let swapped = false;

  if (ascending) {
    if (j < sortedArray.length - 1 && sortedArray[j] > sortedArray[j + 1]) {
      [sortedArray[j], sortedArray[j + 1]] = [
        sortedArray[j + 1],
        sortedArray[j],
      ];
      swapped = true;
    }
  } else {
    if (j < sortedArray.length - 1 && sortedArray[j] < sortedArray[j + 1]) {
      [sortedArray[j], sortedArray[j + 1]] = [
        sortedArray[j + 1],
        sortedArray[j],
      ];
      swapped = true;
    }
  }

  j++;

  if (j >= sortedArray.length - i - 1) {
    i++;
    j = 0;
  }

  if (!swapped && i > 0) {
    return { sortedArray, step: { i: sortedArray.length - 1, j: 0 } };
  }

  return { sortedArray, step: { i, j } };
};
