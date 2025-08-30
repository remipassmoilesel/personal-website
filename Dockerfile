FROM nginx:1.21.6-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /srv
COPY dist/ /srv
