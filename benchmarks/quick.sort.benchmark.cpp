#include "../src/quick.sort.cpp"
#include "./benchmark_utils.h"

static void BM_QuickSortAscending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    quickSort(arr.data(), arr.size(), true);
  }
}

static void BM_QuickSortDescending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    quickSort(arr.data(), arr.size(), false);
  }
}

BENCHMARK(BM_QuickSortAscending)->Range(8, 8 << 10);
BENCHMARK(BM_QuickSortDescending)->Range(8, 8 << 10);
