# FROM swaggerapi/swagger-ui:v4.1.3

# ENV SWAGGER_JSON=/foo

# COPY public/swagger.json /foo

# EXPOSE 3000

FROM node:12-alpine AS development

# Set working directory
WORKDIR /app

# 
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

# Same as npm install
RUN yarn

COPY . /app

ENV CI=true
ENV PORT=3000

CMD [ "npm", "start" ]

FROM development AS build


# 2. For Nginx setup
FROM nginx:latest

# Copy config nginx
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build /app/build .

# Containers run nginx with global directives and daemon off
EXPOSE 3000