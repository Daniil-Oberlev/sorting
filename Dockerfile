FROM alpine:3.18

RUN apk update && apk add --no-cache \
    clang \
    g++ \
    make \
    wget

WORKDIR /app

COPY . .

RUN if [ -f Makefile ]; then make test; else echo "Makefile not found"; fi
