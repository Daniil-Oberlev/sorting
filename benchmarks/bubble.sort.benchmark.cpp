#include "../src/bubble.sort.cpp"
#include "./benchmark_utils.h"

static void BM_BubbleSortAscending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    bubbleSort(arr.data(), arr.size(), true);
  }
}

static void BM_BubbleSortDescending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    bubbleSort(arr.data(), arr.size(), false);
  }
}

BENCHMARK(BM_BubbleSortAscending)->Range(8, 8 << 10);
BENCHMARK(BM_BubbleSortDescending)->Range(8, 8 << 10);
