FROM node:16.15.1-alpine3.15 AS BUILDER
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build-storybook


FROM httpd:2.4.41-alpine

LABEL maintainer="ticapp.gov.pt"
LABEL tid=portalunicostorybookagora

COPY --from=BUILDER /app/storybook-static/ /usr/local/apache2/htdocs/
COPY --from=BUILDER /app/infrastructure/httpd.conf /usr/local/apache2/conf/httpd.conf
