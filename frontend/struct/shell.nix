{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-18_x
    pkgs.bash
  ];

  shellHook = ''
    export NODE_ENV=development
    echo "Setting up environment for development"

    # Автоматическая установка зависимостей при запуске nix-shell
    if [ ! -d node_modules ]; then
      echo "Installing npm dependencies..."
      yarn
    fi

    # Автоматический запуск проекта в режиме разработки
    echo "Starting development server..."
    npm run dev
  '';
}
