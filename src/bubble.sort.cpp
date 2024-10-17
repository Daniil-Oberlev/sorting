template <typename T> void bubbleSort(T *arr, int n, bool ascending = true) {
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if ((ascending && arr[j] > arr[j + 1]) ||
          (!ascending && arr[j] < arr[j + 1])) {
        T copy = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = copy;
      }
    }
  }
}
