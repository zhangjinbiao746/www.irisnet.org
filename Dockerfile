FROM node:16.20.0-alpine3.18 as builder
WORKDIR /app
COPY . .
ARG SITE_KEY=''

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && \
    apk add git && \
    yarn install --registry http://registry.npmmirror.com  && \
    yarn build-params $SITE_KEY && \
    yarn build

FROM nginx:1.24-alpine
RUN echo -e 'server {\n\
    root   /usr/share/nginx/html;\n\
    location / {\n\
        if ($request_filename ~* index.html|.*\.ico$)\n\
        {\n\
          add_header Cache-Control no-cache;\n\
        }\n\
        try_files $URI $URI/ /index.html;\n\
        # 以下是针对 VuePress 路由的 Rewrite 规则
        if (!-e $request_filename) {\n\
            rewrite ^/(.*) /index.html last;\n\
        }\n\
    }\n\
    location /api/ {\n\
        proxy_pass http://as-nodejs.rainbow:3000/;\n\
    }\n\
    # 开启gzip 动态压缩
    gzip on;\n\
    gzip_min_length 1k;\n\
    gzip_comp_level 6;\n\
    gzip_types application/javascript application/json application/xml text/css text/javascript text/plain text/xml text/html;\n\
}' > /etc/nginx/conf.d/default.conf
COPY --from=builder /app/docs/.vuepress/dist/ /usr/share/nginx/html/
