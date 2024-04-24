# FROM swaggerapi/swagger-ui:v4.1.3

# ENV SWAGGER_JSON=/foo

# COPY public/swagger.json /foo

# EXPOSE 3000

FROM node:18-alpine AS development

# Set working directory
WORKDIR /app

# 
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn global add serve
COPY . /app

ENV CI=true
ENV PORT=3000

CMD [ "serve", "-s" ,"build"]

EXPOSE 3000