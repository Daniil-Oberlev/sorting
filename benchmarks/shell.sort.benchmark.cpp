#include "../src/shell.sort.cpp"
#include "./benchmark_utils.h"

static void BM_ShellSortAscending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    shellSort(arr.data(), arr.size(), true);
  }
}

static void BM_ShellSortDescending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    shellSort(arr.data(), arr.size(), false);
  }
}

BENCHMARK(BM_ShellSortAscending)->Range(8, 8 << 10);
BENCHMARK(BM_ShellSortDescending)->Range(8, 8 << 10);
