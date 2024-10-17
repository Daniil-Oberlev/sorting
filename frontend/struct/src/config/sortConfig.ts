import * as sortFunctions from "@/functions/";
import { SortStep } from "@/interfaces/interface";
import data from "@/texts/data.json";

type SortFunction = {
  step: (
    arr: number[],
    step: SortStep,
    ascending?: boolean,
  ) => { sortedArray: number[]; step: SortStep };
  title: string;
  description: string;
  complexity: {
    worst: string;
    best: string;
    average: string;
  };
};

const sortConfig: Record<string, SortFunction> = {
  binary_insertion: {
    step: sortFunctions.binaryInsertionSortStep,
    title: data.binary_insertion.title,
    description: data.binary_insertion.description,
    complexity: data.binary_insertion.complexity,
  },
  bogo: {
    step: sortFunctions.bogoSortStep,
    title: data.bogo.title,
    description: data.bogo.description,
    complexity: data.bogo.complexity,
  },
  bubble: {
    step: sortFunctions.bubbleSortStep,
    title: data.bubble.title,
    description: data.bubble.description,
    complexity: data.bubble.complexity,
  },
  exchange: {
    step: sortFunctions.exchangeSortStep,
    title: data.exchange.title,
    description: data.exchange.description,
    complexity: data.exchange.complexity,
  },
  insertion: {
    step: sortFunctions.insertionSortStep,
    title: data.insertion.title,
    description: data.insertion.description,
    complexity: data.insertion.complexity,
  },
  optimized_bubble: {
    step: sortFunctions.optimizedBubbleSortStep,
    title: data.optimized_bubble.title,
    description: data.optimized_bubble.description,
    complexity: data.optimized_bubble.complexity,
  },
  quick: {
    step: sortFunctions.quickSortStep,
    title: data.quick.title,
    description: data.quick.description,
    complexity: data.quick.complexity,
  },
  selection: {
    step: sortFunctions.selectionSortStep,
    title: data.selection.title,
    description: data.selection.description,
    complexity: data.selection.complexity,
  },
  shaker: {
    step: sortFunctions.shakerSortStep,
    title: data.shaker.title,
    description: data.shaker.description,
    complexity: data.shaker.complexity,
  },
  shell: {
    step: sortFunctions.shellSortStep,
    title: data.shell.title,
    description: data.shell.description,
    complexity: data.shell.complexity,
  },
};

export default sortConfig;
