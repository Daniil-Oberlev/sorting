template <typename T> void shellSort(T *arr, int n, bool ascending = true) {
  for (int gap = n / 2; gap > 0; gap /= 2) {
    for (int i = gap; i < n; ++i) {
      T   temp = arr[i];
      int j;

      if (ascending) {
        for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
          arr[j] = arr[j - gap];
        }
      } else {
        for (j = i; j >= gap && arr[j - gap] < temp; j -= gap) {
          arr[j] = arr[j - gap];
        }
      }

      arr[j] = temp;
    }
  }
}
