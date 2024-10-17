import { ISortState, SortStep } from "@/interfaces/interface";
import { useCallback, useEffect, useState } from "react";

export const useSortState = (
  initialItemCount: number,
  generateInitialItems: (count: number) => number[],
) => {
  const [state, setState] = useState<ISortState>({
    items: [],
    sorted: false,
    itemCount: initialItemCount,
    sorting: false,
  });

  const reset = useCallback(() => {
    const randomSizes = generateInitialItems(state.itemCount);
    setState({
      items: randomSizes,
      sorted: false,
      itemCount: state.itemCount,
      sorting: false,
    });
  }, [state.itemCount, generateInitialItems]);

  return { state, setState, reset };
};

export const useSort = (
  state: ISortState,
  setState: React.Dispatch<React.SetStateAction<ISortState>>,
  sortFunction: (
    arr: number[],
    step: SortStep,
  ) => { sortedArray: number[]; step: SortStep },
) => {
  const [step, setStep] = useState<SortStep>({ i: 0, j: 0 });

  useEffect(() => {
    if (!state.sorted && state.sorting) {
      const sortInterval = setInterval(() => {
        const { sortedArray, step: newStep } = sortFunction(state.items, step);

        setState((prevState) => ({
          ...prevState,
          items: sortedArray,
        }));

        setStep(newStep);

        if (newStep.i >= sortedArray.length) {
          setState((prevState) => ({
            ...prevState,
            sorted: true,
          }));
          clearInterval(sortInterval);
        }
      }, 200);

      return () => clearInterval(sortInterval);
    }
  }, [state.items, state.sorted, state.sorting, sortFunction, setState, step]);
};
