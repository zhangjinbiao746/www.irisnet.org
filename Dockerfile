FROM node:16.15.1-alpine3.16 as builder
WORKDIR /app
COPY . .
ARG ADMIN_SERVER
ARG APKPROXY=http://mirrors.ustc.edu.cn/alpine

RUN sed -i "s+http://dl-cdn.alpinelinux.org/alpine+${APKPROXY}+g" /etc/apk/repositories && \
    apk add git && \
    yarn install --registry http://registry.npmmirror.com  && \
    yarn build-params $ADMIN_SERVER && yarn build

FROM nginx:1.19-alpine
RUN echo -e 'server {\n\
    listen       80;\n\
    server_name  localhost;\n\
    location / {\n\
        root   /usr/share/nginx/html;\n\
        index  index.html index.htm;\n\
        if ($request_filename ~* index.html|.*\.ico$)\n\
        {\n\
          add_header Cache-Control no-cache;\n\
        }\n\
    }\n\
}' > /etc/nginx/conf.d/default.conf
COPY --from=builder /app/docs/.vuepress/dist/ /usr/share/nginx/html/
