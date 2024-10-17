#include "./benchmark_utils.h"
#include <cstdlib>

std::vector<int> generateRandomVector(int size) {
  std::vector<int> vec(size);
  for (int &val : vec) {
    val = rand() % 1000;
  }
  return vec;
}
