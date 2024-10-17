import { SortStep } from "@/interfaces/interface";
import { partition } from "@/utils/sortingUtils";

export const quickSortStep = (
  arr: number[],
  step: SortStep & { stack?: Array<{ low: number; high: number }> },
  ascending: boolean = true,
): {
  sortedArray: number[];
  step: SortStep & { stack: Array<{ low: number; high: number }> };
} => {
  const sortedArray = [...arr];
  let { stack } = step;

  if (!stack) {
    stack = [{ low: 0, high: sortedArray.length - 1 }];
  }

  if (stack.length > 0) {
    const { low, high } = stack.pop()!;

    if (low < high) {
      const pi = partition(sortedArray, low, high, ascending);

      stack.push({ low, high: pi - 1 });
      stack.push({ low: pi + 1, high });
    }
  }

  return {
    sortedArray,
    step: { ...step, stack },
  };
};
