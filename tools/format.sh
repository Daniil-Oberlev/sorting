#!/bin/bash

rm -f errors.log

echo "Форматирование файлов..."

find . \( -name "*.h" -o -name "*.hpp" -o -name "*.cpp" \) -exec clang-format -i {} \; 2>> errors.log

if [ -s errors.log ]; then
    echo "Ошибки при форматировании:"
    cat errors.log
else
    echo "Форматирование завершено без ошибок."
fi
