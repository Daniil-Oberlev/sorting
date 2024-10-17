template <typename T>
int binarySearch(T *arr, T item, int low, int high, bool ascending = true) {
  if (ascending) {
    while (low <= high) {
      int mid = low + (high - low) / 2;
      if (arr[mid] == item)
        return mid + 1;
      else if (arr[mid] < item)
        low = mid + 1;
      else
        high = mid - 1;
    }
  } else {
    while (low <= high) {
      int mid = low + (high - low) / 2;
      if (arr[mid] == item)
        return mid + 1;
      else if (arr[mid] > item)
        low = mid + 1;
      else
        high = mid - 1;
    }
  }
  return low;
}

template <typename T>
void binaryInsertionSort(T *arr, int n, bool ascending = true) {
  for (int i = 1; i < n; i++) {
    T   selected = arr[i];
    int j = i - 1;

    int loc = binarySearch(arr, selected, 0, j, ascending);

    while (j >= loc) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = selected;
  }
}
