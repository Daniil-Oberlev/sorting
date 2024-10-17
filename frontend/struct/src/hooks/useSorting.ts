import { useSort, useSortState } from "@/hooks/sortingHooks";
import { SortStep } from "@/interfaces/interface";
import { generateRandomSizes, isSorted } from "@/utils/sortingUtils";
import { useCallback, useEffect } from "react";

const useSorting = (
  sortStepFunction: (
    arr: number[],
    step: SortStep,
  ) => { sortedArray: number[]; step: SortStep },
  initialCount: number,
) => {
  const { state, setState, reset } = useSortState(
    initialCount,
    generateRandomSizes,
  );

  const startSort = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      sorting: true,
    }));
  }, [setState]);

  useEffect(() => {
    reset();
    startSort();
  }, [reset, startSort]);

  useSort(state, setState, (arr: number[], step: SortStep) => {
    const j = step.j !== undefined ? step.j : 0;

    const { sortedArray, step: newStep } = sortStepFunction(arr, {
      ...step,
      j,
    });

    setState((prevState) => ({
      ...prevState,
      items: sortedArray,
      step: newStep,
      sorted: isSorted(sortedArray),
    }));

    return { sortedArray, step: newStep };
  });

  return { state };
};

export default useSorting;
