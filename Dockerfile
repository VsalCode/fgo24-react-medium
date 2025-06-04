FROM ubuntu:noble

WORKDIR /workspace

RUN apt-get update && apt-get install nginx nodejs npm -y

COPY package*.json ./
COPY public ./public
COPY src ./src

RUN npm install

COPY . . 

RUN npm run build

RUN cp -r dist/* /var/www/html/

COPY public/data.json /var/www/html/data.json

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]