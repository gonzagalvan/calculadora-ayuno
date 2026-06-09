FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js

EXPOSE 80

CMD ["/bin/sh", "-c", "sed -i 's/APP_VERSION_PLACEHOLDER/'\"$APP_VERSION\"'/g' /usr/share/nginx/html/index.html && nginx -g 'daemon off;'"]