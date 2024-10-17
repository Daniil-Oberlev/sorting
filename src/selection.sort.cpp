template <typename T> void selectionSort(T *arr, int n, bool ascending = true) {
  for (int i = 0; i < n - 1; ++i) {
    int selectedIn = i;
    for (int j = i + 1; j < n; ++j) {
      if ((ascending && arr[j] < arr[selectedIn]) ||
          (!ascending && arr[j] > arr[selectedIn])) {
        selectedIn = j;
      }
    }
    T copy = arr[i];
    arr[i] = arr[selectedIn];
    arr[selectedIn] = copy;
  }
}
