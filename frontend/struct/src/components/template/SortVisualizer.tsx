"use client";

import useSorting from "@/hooks/useSorting";
import { ISortVisualizer } from "@/interfaces/interface";
import { SortElements } from "../molecule/SortElements";

const SortVisualizer: React.FC<ISortVisualizer> = ({
  sortStepFunction,
  initialCount,
}) => {
  const { state } = useSorting(
    sortStepFunction || (() => ({ sortedArray: [], step: { i: 0 } })),
    initialCount,
  );

  return (
    <main className="sort__visualizer">
      <h2 className="sort__counter">
        Текущее количество блоков: {state.itemCount}
      </h2>
      <SortElements items={state.items} />
      {state.sorted && <p>Отсортировано!</p>}
    </main>
  );
};

export default SortVisualizer;
