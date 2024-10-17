import { SortStep } from "@/interfaces/interface";

export const selectionSortStep = (
  arr: number[],
  step: SortStep,
  ascending: boolean = true,
): { sortedArray: number[]; step: SortStep } => {
  const sortedArray = [...arr];
  let { i, j } = step;
  let minOrMaxIndex = step.selectedIndex !== undefined ? step.selectedIndex : i;

  if (i < sortedArray.length - 1) {
    if (j === undefined) {
      j = i + 1;
    }

    if (
      (ascending && sortedArray[j] < sortedArray[minOrMaxIndex]) ||
      (!ascending && sortedArray[j] > sortedArray[minOrMaxIndex])
    ) {
      minOrMaxIndex = j;
    }

    j++;

    if (j >= sortedArray.length) {
      if (minOrMaxIndex !== i) {
        [sortedArray[i], sortedArray[minOrMaxIndex]] = [
          sortedArray[minOrMaxIndex],
          sortedArray[i],
        ];
      }
      i++;
      j = i + 1;
      minOrMaxIndex = i;
    }
  }

  if (i >= sortedArray.length - 1) {
    i = sortedArray.length - 1;
    j = undefined;
  }

  return {
    sortedArray,
    step: { i, j, selectedIndex: minOrMaxIndex },
  };
};
