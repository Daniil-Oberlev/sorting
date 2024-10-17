#!/bin/bash

# Путь к директориям, которые нужно удалить
BUILD_DIR="./build"
DIST_DIR="./dist"
CACHE_DIR="./node_modules/.cache"

# Удаление директории dist
if [ -d "$DIST_DIR" ]; then
    rm -rf "$DIST_DIR"
    echo "Удалена директория: $DIST_DIR"
else
    echo "Директория $DIST_DIR не найдена"
fi

# Удаление директории build
if [ -d "$BUILD_DIR" ]; then
    rm -rf "$BUILD_DIR"
    echo "Удалена директория: $BUILD_DIR"
else
    echo "Директория $BUILD_DIR не найдена"
fi

# Удаление кэша в node_modules
if [ -d "$CACHE_DIR" ]; then
    rm -rf "$CACHE_DIR"
    echo "Удалена директория: $CACHE_DIR"
else
    echo "Директория $CACHE_DIR не найдена"
fi
