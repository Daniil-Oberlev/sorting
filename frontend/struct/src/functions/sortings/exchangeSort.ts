import { SortStep } from "@/interfaces/interface";

export const exchangeSortStep = (
  arr: number[],
  step: SortStep,
  ascending: boolean = true,
): { sortedArray: number[]; step: SortStep } => {
  const sortedArray = [...arr];
  let { i, j } = step;

  j = j !== undefined ? j : 0;

  if (i < sortedArray.length - 1) {
    if (j < sortedArray.length) {
      if (
        (ascending && sortedArray[i] > sortedArray[j]) ||
        (!ascending && sortedArray[i] < sortedArray[j])
      ) {
        [sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]];
      }
      j++;
    } else {
      i++;
      j = i + 1;
    }
  }

  return { sortedArray, step: { i, j } };
};
