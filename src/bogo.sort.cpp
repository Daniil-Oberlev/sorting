#include <algorithm>
#include <cstdlib>
#include <ctime>

template <typename T> void bogoSort(T *arr, int n) {
  srand(time(0));
  while (!std::is_sorted(arr, arr + n)) {
    for (int i = 0; i < n; i++) {
      std::swap(arr[i], arr[rand() % n]);
    }
  }
}
