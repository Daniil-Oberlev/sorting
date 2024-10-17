import { SortStep } from "@/interfaces/interface";

export const shellSortStep = (
  arr: number[],
  step: SortStep,
  ascending: boolean = true,
): { sortedArray: number[]; step: SortStep } => {
  const sortedArray = [...arr];
  const n = sortedArray.length;

  let gap = step.gap !== undefined ? step.gap : Math.floor(n / 2);
  let { i, j } = step;

  if (gap <= 0) {
    return { sortedArray, step: { i: n, j: n, gap: 0 } };
  }

  if (i === undefined || i >= n) {
    i = gap;
  }

  while (i < n) {
    const temp = sortedArray[i];
    j = i;

    if (ascending) {
      while (j >= gap && sortedArray[j - gap] > temp) {
        sortedArray[j] = sortedArray[j - gap];
        j -= gap;
      }
    } else {
      while (j >= gap && sortedArray[j - gap] < temp) {
        sortedArray[j] = sortedArray[j - gap];
        j -= gap;
      }
    }

    sortedArray[j] = temp;
    i++;
  }

  gap = Math.floor(gap / 2);
  i = gap;

  return { sortedArray, step: { i, j, gap } };
};
