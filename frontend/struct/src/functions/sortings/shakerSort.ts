import { SortStep } from "@/interfaces/interface";

export const shakerSortStep = (
  arr: number[],
  step: SortStep,
  ascending: boolean = true,
): { sortedArray: number[]; step: SortStep } => {
  const sortedArray = [...arr];
  let { i, j } = step;

  let start = 0;
  let end = sortedArray.length - 1;

  if (i < end) {
    if (j === undefined) {
      j = start;
    }

    for (; j < end; j++) {
      if (
        (ascending && sortedArray[j] > sortedArray[j + 1]) ||
        (!ascending && sortedArray[j] < sortedArray[j + 1])
      ) {
        [sortedArray[j], sortedArray[j + 1]] = [
          sortedArray[j + 1],
          sortedArray[j],
        ];
      }
    }

    end--;

    for (j = end; j > start; j--) {
      if (
        (ascending && sortedArray[j] < sortedArray[j - 1]) ||
        (!ascending && sortedArray[j] > sortedArray[j - 1])
      ) {
        [sortedArray[j], sortedArray[j - 1]] = [
          sortedArray[j - 1],
          sortedArray[j],
        ];
      }
    }

    start++;

    if (start >= end) {
      i++;
      j = undefined;
    }
  }

  return { sortedArray, step: { i, j } };
};
