template <typename T> void exchangeSort(T *arr, int n, bool ascending = true) {
  for (int i = 0; i < n - 1; i++) {
    for (int j = i + 1; j < n; j++) {
      if ((ascending && arr[i] > arr[j]) || (!ascending && arr[i] < arr[j])) {
        T copy = arr[i];
        arr[i] = arr[j];
        arr[j] = copy;
      }
    }
  }
}
