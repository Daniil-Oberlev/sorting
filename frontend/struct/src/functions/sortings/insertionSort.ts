import { SortStep } from "@/interfaces/interface";

export const insertionSortStep = (
  arr: number[],
  step: SortStep,
  ascending: boolean = true,
): { sortedArray: number[]; step: SortStep } => {
  const sortedArray = [...arr];
  let { i, j } = step;

  if (i >= sortedArray.length) {
    return { sortedArray, step: { i, j } };
  }

  const key = sortedArray[i];
  j = i - 1;

  if (ascending) {
    while (j >= 0 && sortedArray[j] > key) {
      sortedArray[j + 1] = sortedArray[j];
      j--;
    }
  } else {
    while (j >= 0 && sortedArray[j] < key) {
      sortedArray[j + 1] = sortedArray[j];
      j--;
    }
  }
  sortedArray[j + 1] = key;

  i++;

  return { sortedArray, step: { i, j } };
};
