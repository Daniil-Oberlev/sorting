#include "../src/shaker.sort.cpp"
#include "./benchmark_utils.h"

static void BM_ShakerSortAscending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    shakerSort(arr.data(), arr.size(), true);
  }
}

static void BM_ShakerSortDescending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    shakerSort(arr.data(), arr.size(), false);
  }
}

BENCHMARK(BM_ShakerSortAscending)->Range(8, 8 << 10);
BENCHMARK(BM_ShakerSortDescending)->Range(8, 8 << 10);
