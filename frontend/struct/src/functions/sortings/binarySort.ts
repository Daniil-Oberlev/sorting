import { SortStep } from "@/interfaces/interface";

const binarySearch = (
  arr: number[],
  item: number,
  low: number,
  high: number,
  ascending: boolean = true,
): number => {
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === item) return mid + 1;
    else if (
      (ascending && arr[mid] < item) ||
      (!ascending && arr[mid] > item)
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
};

export const binaryInsertionSortStep = (
  arr: number[],
  step: SortStep,
  ascending: boolean = true,
): { sortedArray: number[]; step: SortStep } => {
  const sortedArray = [...arr];
  const n = sortedArray.length;

  let { i, j } = step;

  if (i < n) {
    const selected = sortedArray[i];
    const loc = binarySearch(sortedArray, selected, 0, i - 1, ascending);

    for (let k = i - 1; k >= loc; k--) {
      sortedArray[k + 1] = sortedArray[k];
    }

    sortedArray[loc] = selected;

    if (i + 1 < n) {
      i++;
      j = 0;
    } else {
      return { sortedArray, step: { i: n - 1, j: 0 } };
    }
  }

  return { sortedArray, step: { i, j } };
};
