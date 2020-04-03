FROM node:13.10.1-stretch as builder
WORKDIR /react/app
ADD . .
RUN yarn install --network-timeout 1000000
RUN yarn build

FROM nginx:1.17-alpine
COPY --from=builder /react/app/build/ /usr/share/nginx/html/
