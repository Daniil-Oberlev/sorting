CXX = clang++
CXXFLAGS = -g -Wall -Werror

BIN_DIR = $(CURDIR)/bin

SRCS = $(shell find . -name '.ccls-cache' -type d -prune -o -type f -name '*.cpp' ! -name '*test.cpp' ! -name '*benchmark.cpp' ! -path './benchmarks/*' -print | sed -e 's/ /\\ /g')
HEADERS = $(shell find . -name '.ccls-cache' -type d -prune -o -type f -name '*.h' -print)
TEST_SRCS = $(shell find tests -type f -name '*.test.cpp' -print | sed -e 's/ /\\ /g')
BENCH_SRCS = $(shell find benchmarks -type f -name '*.benchmark.cpp' -print | sed -e 's/ /\\ /g') benchmarks/benchmark_utils.cpp benchmarks/benchmark.helper.cpp

include config.env

$(shell mkdir -p $(BIN_DIR))

define download_header
	@echo "Загрузка заголовка $1..."
	mkdir -p $2
	wget -q -O $1 $3
	@echo "$1 загружен."
endef

$(CATCH_HEADER):
	$(call download_header,$(CATCH_HEADER),$(CATCH_DIR),$(CATCH_URL))

$(BENCH_HEADER) $(BENCH_EXPORT):
	$(call download_header,$(BENCH_HEADER),$(BENCH_DIR),$(BENCH_URL))
	@wget -q -O $(BENCH_EXPORT) $(BENCH_EXPORT_URL)

all: main test benchmark

main: $(SRCS) $(HEADERS)
	$(CXX) $(CXXFLAGS) $(SRCS) -o $(BIN_DIR)/main

main-debug: $(SRCS) $(HEADERS)
	NIX_HARDENING_ENABLE= $(CXX) $(CXXFLAGS) -O0 $(SRCS) -o $(BIN_DIR)/main-debug

test: $(CATCH_HEADER) $(TEST_SRCS) $(filter-out benchmarks/benchmark.helper.cpp benchmarks/benchmark_utils.cpp, $(SRCS)) $(HEADERS)
	$(CXX) $(CXXFLAGS) $(TEST_SRCS) $(filter-out benchmarks/benchmark.helper.cpp benchmarks/benchmark_utils.cpp, $(SRCS)) -o $(BIN_DIR)/test -lbenchmark -lpthread
	$(BIN_DIR)/test

benchmark: $(BENCH_HEADER) $(BENCH_EXPORT) $(BENCH_SRCS)
	$(CXX) $(CXXFLAGS) $(BENCH_SRCS) -DBENCHMARK_MAIN_ENABLED -o $(BIN_DIR)/benchmark -lbenchmark -lpthread
	$(BIN_DIR)/benchmark

clean:
	rm -f $(BIN_DIR)/main $(BIN_DIR)/main-debug $(BIN_DIR)/test $(BIN_DIR)/benchmark
	rm -rf $(CATCH_DIR) $(BENCH_DIR)

.PHONY: all main main-debug test benchmark clean
