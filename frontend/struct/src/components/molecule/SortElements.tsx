import { ISortElements } from "@/interfaces/interface";
import "@/styles/sortVisualizer.scss";

export const SortElements: React.FC<ISortElements> = ({ items }) => {
  return (
    <ul className="sort__container">
      {items.map((size, index) => (
        <li
          key={index}
          className="sort__container--element"
          style={{ height: `${size}%` }}
        />
      ))}
    </ul>
  );
};
