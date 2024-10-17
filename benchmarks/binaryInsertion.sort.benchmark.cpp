#include "../src/binaryInsertion.sort.cpp"
#include "./benchmark_utils.h"

static void BM_InsertionSortAscending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    binaryInsertionSort(arr.data(), arr.size(), true);
  }
}

static void BM_InsertionSortDescending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    binaryInsertionSort(arr.data(), arr.size(), false);
  }
}

BENCHMARK(BM_InsertionSortAscending)->Range(8, 8 << 10);
BENCHMARK(BM_InsertionSortDescending)->Range(8, 8 << 10);
