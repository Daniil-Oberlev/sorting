#include "../src/bogo.sort.cpp"
#include "./benchmark_utils.h"

static void BM_BogoSortAscending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    bogoSort(arr.data(), arr.size());
  }
}

BENCHMARK(BM_BogoSortAscending)->Range(2, 8);
