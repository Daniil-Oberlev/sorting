import { SortStep } from "@/interfaces/interface";
import { isSorted, shuffle } from "@/utils/sortingUtils";

export const bogoSortStep = (
  arr: number[],
  step: SortStep,
): { sortedArray: number[]; step: SortStep } => {
  const sortedArray = [...arr];

  const j = step.j !== undefined ? step.j : 0;

  if (!isSorted(sortedArray)) {
    return {
      sortedArray: shuffle(sortedArray),
      step: { i: step.i, j: j + 1 },
    };
  }

  return { sortedArray, step };
};
