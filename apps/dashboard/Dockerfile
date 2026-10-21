FROM node:alpine AS prepare

WORKDIR /app
RUN npm i --global pnpm@latest turbo@latest

FROM prepare AS builder

COPY . .
RUN turbo prune dashboard --docker 


FROM prepare AS prod

WORKDIR /app

COPY --from=builder /app/out/json .
RUN pnpm i

COPY --from=builder /app/out/full .

ARG TURBO_TEAM
ENV TURBO_TEAM=$TURBO_TEAM

ARG TURBO_TOKEN
ENV TURBO_TOKEN=$TURBO_TOKEN

RUN turbo build