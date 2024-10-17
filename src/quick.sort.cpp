#include <algorithm>

template <typename T> int partition(T *arr, int low, int high, bool ascending) {
  T   pivot = arr[high];
  int i = low - 1;

  for (int j = low; j < high; ++j) {
    if ((ascending && arr[j] < pivot) || (!ascending && arr[j] > pivot)) {
      ++i;
      std::swap(arr[i], arr[j]);
    }
  }
  std::swap(arr[i + 1], arr[high]);
  return i + 1;
}

template <typename T>
void quickSort(T *arr, int low, int high, bool ascending = true) {
  if (low < high) {
    int pi = partition(arr, low, high, ascending);

    quickSort(arr, low, pi - 1, ascending);
    quickSort(arr, pi + 1, high, ascending);
  }
}
