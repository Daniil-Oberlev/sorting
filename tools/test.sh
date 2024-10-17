#!/bin/bash

test() {
    if [ -f test ]; then
        echo "Запуск тестов..."
        ./test
        return
    fi

    if command -v nix-shell &> /dev/null; then
        echo "Запуск тестов с использованием nix-shell..."
        nix-shell --run "make test"
    elif command -v make &> /dev/null; then
        echo "Запуск тестов с использованием make..."
        make test
    elif command -v docker &> /dev/null; then
        echo "Запуск тестов в Docker..."
        docker run -it --rm sort-app make test
    else
        echo "К сожалению, у вас не установлен nix, make или docker."
        exit 1
    fi
}

test
