export const shuffle = (arr: number[]): number[] => {
  let count = arr.length,
    temp,
    index;
  while (count > 0) {
    index = Math.floor(Math.random() * count);
    count--;

    temp = arr[count];
    arr[count] = arr[index];
    arr[index] = temp;
  }
  return arr;
};

export const generateRandomSizes = (count: number): number[] => {
  const sizes: number[] = [];
  for (let i = 1; i <= count; i++) {
    sizes.push((100 / count) * i);
  }
  return sizes.reverse();
};

export const isSorted = (arr: number[]): boolean => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
};

export const partition = (
  arr: number[],
  low: number,
  high: number,
  ascending: boolean = true,
): number => {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (ascending ? arr[j] < pivot : arr[j] > pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
};
