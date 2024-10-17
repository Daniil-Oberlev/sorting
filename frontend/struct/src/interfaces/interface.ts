export interface IHeader {
  title: string;
}

interface IComplexity {
  worst?: string;
  best?: string;
  average?: string;
}

export interface IAside extends IComplexity {
  description: string;
}

export interface ISortState {
  items: number[];
  sorted: boolean;
  itemCount: number;
  sorting: boolean;
}

export interface ISortVisualizer {
  initialCount: number;
  sortStepFunction: SortStepFunction | null;
}

export interface ISortElements {
  items: number[];
}

export interface SortStep {
  i: number;
  j?: number;
  selectedIndex?: number;
  gap?: number;
}

export type SortStepFunction = (
  arr: number[],
  step: SortStep,
) => {
  sortedArray: number[];
  step: SortStep;
};
