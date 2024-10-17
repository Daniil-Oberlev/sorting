#include "../include/binaryInsertion.sort.h"
#include "../libs/catch2/catch.hpp"
#include <vector>

TEST_CASE("Тесты бинарной сортировки вставками и бинарного поиска") {
  int N = 5;

  SECTION("Массив целых чисел по возрастанию") {
    int Array[5] = {9, 7, 5, 3, 1};
    binaryInsertionSort(Array, N);
    for (int i = 0; i < N - 1; i++) {
      REQUIRE(Array[i] <= Array[i + 1]);
    }
  }

  SECTION("Пустой массив целых чисел по возрастанию") {
    int Array2[0] = {};
    binaryInsertionSort(Array2, 0);
  }

  SECTION("Массив чисел с плавающей запятой по возрастанию") {
    double Array3[5] = {5.5, 4.4, 3.3, 2.2, 1.1};
    binaryInsertionSort(Array3, N);
    for (int i = 0; i < N - 1; i++) {
      REQUIRE(Array3[i] <= Array3[i + 1]);
    }
  }

  SECTION("Массив целых чисел по убыванию") {
    int Array[5] = {1, 3, 5, 7, 9};
    binaryInsertionSort(Array, N, false);
    for (int i = 0; i < N - 1; i++) {
      REQUIRE(Array[i] >= Array[i + 1]);
    }
  }

  SECTION("Массив чисел с плавающей запятой по убыванию") {
    double Array3[5] = {1.1, 2.2, 3.3, 4.4, 5.5};
    binaryInsertionSort(Array3, N, false);
    for (int i = 0; i < N - 1; i++) {
      REQUIRE(Array3[i] >= Array3[i + 1]);
    }
  }

  SECTION("Массив из одного элемента") {
    int Array[1] = {42};
    binaryInsertionSort(Array, 1);
    REQUIRE(Array[0] == 42);
  }

  SECTION("Массив с дубликатами по возрастанию") {
    int Array[5] = {5, 3, 5, 1, 3};
    binaryInsertionSort(Array, N);
    for (int i = 0; i < N - 1; i++) {
      REQUIRE(Array[i] <= Array[i + 1]);
    }
  }

  SECTION("Массив с уже отсортированными элементами по возрастанию") {
    int Array[5] = {1, 2, 3, 4, 5};
    binaryInsertionSort(Array, N);
    for (int i = 0; i < N - 1; i++) {
      REQUIRE(Array[i] <= Array[i + 1]);
    }
  }

  SECTION("Массив с одинаковыми элементами") {
    int Array[5] = {5, 5, 5, 5, 5};
    binaryInsertionSort(Array, N);
    for (int i = 0; i < N - 1; i++) {
      REQUIRE(Array[i] == Array[i + 1]);
    }
  }

  SECTION("Массив с отрицательными числами по возрастанию") {
    int Array[5] = {-3, -1, -7, -5, -2};
    binaryInsertionSort(Array, N);
    for (int i = 0; i < N - 1; i++) {
      REQUIRE(Array[i] <= Array[i + 1]);
    }
  }

  SECTION("Очень большой массив по возрастанию") {
    int              largeN = 100000;
    std::vector<int> LargeArray(largeN);

    for (int i = 0; i < largeN; ++i) {
      LargeArray[i] = largeN - i;
    }

    binaryInsertionSort(LargeArray.data(), largeN);

    for (int i = 0; i < largeN - 1; i++) {
      REQUIRE(LargeArray[i] <= LargeArray[i + 1]);
    }
  }
}
