#include "../src/optimizedBubble.sort.cpp"
#include "./benchmark_utils.h"

static void BM_OptimizedBubbleAscending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    optimizedBubbleSort(arr.data(), arr.size(), true);
  }
}

static void BM_OptimizedBubbleDescending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    optimizedBubbleSort(arr.data(), arr.size(), false);
  }
}

BENCHMARK(BM_OptimizedBubbleAscending)->Range(8, 8 << 10);
BENCHMARK(BM_OptimizedBubbleDescending)->Range(8, 8 << 10);
