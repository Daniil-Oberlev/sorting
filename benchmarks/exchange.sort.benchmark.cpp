#include "../src/exchange.sort.cpp"
#include "./benchmark_utils.h"

static void BM_ExchangeSortAscending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    exchangeSort(arr.data(), arr.size(), true);
  }
}

static void BM_ExchangeSortDescending(benchmark::State &state) {
  for (auto _ : state) {
    std::vector<int> arr = generateRandomVector(state.range(0));
    exchangeSort(arr.data(), arr.size(), false);
  }
}

BENCHMARK(BM_ExchangeSortAscending)->Range(8, 8 << 10);
BENCHMARK(BM_ExchangeSortDescending)->Range(8, 8 << 10);
