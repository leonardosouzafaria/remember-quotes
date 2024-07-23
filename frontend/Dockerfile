# Stage 1: Build the Angular app
FROM node:16-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build -- --prod

# Stage 2: Serve the app with nginx
FROM nginx:alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
