# stage 1: build
FROM node:24-alpine AS build

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

# stage 2: serve
FROM nginx:alpine AS production

# copy the build output from the 'build' stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]