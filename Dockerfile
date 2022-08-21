# Build with node
FROM node:current-alpine as build-stage
WORKDIR /app
COPY package.json ./
#COPY package-lock.json ./
RUN yarn
COPY . ./
RUN yarn lint
RUN yarn build

# Run with nginx
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
