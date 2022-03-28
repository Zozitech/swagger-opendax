FROM swaggerapi/swagger-ui:v4.1.3

ENV SWAGGER_JSON=/foo/swagger.json

COPY public/swagger.json /foo