template <typename T> void shakerSort(T *arr, int n, bool ascending = true) {
  bool swapped = true;
  int  start = 0;
  int  end = n - 1;

  while (swapped) {
    swapped = false;

    for (int i = start; i < end; ++i) {
      if ((ascending && arr[i] > arr[i + 1]) ||
          (!ascending && arr[i] < arr[i + 1])) {
        T temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) { break; }

    swapped = false;
    --end;

    for (int i = end - 1; i >= start; --i) {
      if ((ascending && arr[i] > arr[i + 1]) ||
          (!ascending && arr[i] < arr[i + 1])) {
        T temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }

    ++start;
  }
}
