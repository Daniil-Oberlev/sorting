template <typename T> void insertionSort(T *arr, int n, bool ascending = true) {
  for (int i = 1; i < n; i++) {
    T   key = arr[i];
    int j = i - 1;
    if (ascending) {
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
    } else {
      while (j >= 0 && arr[j] < key) {
        arr[j + 1] = arr[j];
        j--;
      }
    }
    arr[j + 1] = key;
  }
}
