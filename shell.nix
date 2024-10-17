{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.clang           # Компилятор clang
    pkgs.ccls            # Языковой сервер для C/C++
    pkgs.gdb             # Отладчик
    pkgs.catch2          # Catch2 для тестирования
    pkgs.perl            # Для выполнения Perl-скриптов
    pkgs.gbenchmark      # Google Benchmark
    pkgs.lcov            # Утилита для покрытия кода
    pkgs.gcc             # Для gcov
    pkgs.glibcLocales    # Для исправления проблем с локалью
    pkgs.bash            # Для обеспечения наличия /bin/sh
  ];

  shellHook = ''
    cat ascii-art.txt
  '';
}
