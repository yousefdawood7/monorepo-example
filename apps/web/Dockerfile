FROM node:alpine AS prepare

WORKDIR /app
RUN npm i --global pnpm@latest turbo@latest

FROM prepare AS builder

COPY . .
RUN turbo prune web --docker 


FROM prepare AS prod

WORKDIR /app

COPY --from=builder /app/out/json .
RUN pnpm i

COPY --from=builder /app/out/full .

RUN turbo build