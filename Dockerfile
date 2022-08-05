FROM swaggerapi/swagger-ui:v4.1.3

ENV SWAGGER_JSON=/foo

COPY public/swagger.json /foo