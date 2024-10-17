template <typename T>
void optimizedBubbleSort(T *arr, int n, bool ascending = true) {
  bool flag;
  for (int i = 0; i < n - 1; i++) {
    flag = false;
    for (int j = 0; j < n - i - 1; j++) {
      if ((ascending && arr[j] > arr[j + 1]) ||
          (!ascending && arr[j] < arr[j + 1])) {
        T copy = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = copy;
        flag = true;
      }
    }
    if (!flag) { break; }
  }
}
