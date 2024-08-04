FROM node:20.16.0-alpine AS builder

RUN npm i -g pnpm@8.15.0 serve

# Set working directory
WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm install

COPY . .

RUN pnpm build

FROM node:20.16.0-alpine

ENV CI=true
ENV PORT=3000

WORKDIR /app

RUN npm i -g serve

COPY --from=builder /app/dist /app

CMD [ "serve", "-s" ,"."]

EXPOSE 3000