#include "../src/selection.sort.cpp"
#include "./benchmark_utils.h"

static void BM_SelectionSortAscending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    selectionSort(arr.data(), arr.size(), true);
  }
}

static void BM_SelectionSortDescending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    selectionSort(arr.data(), arr.size(), false);
  }
}

BENCHMARK(BM_SelectionSortAscending)->Range(8, 8 << 10);
BENCHMARK(BM_SelectionSortDescending)->Range(8, 8 << 10);
