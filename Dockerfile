FROM node:14-alpine

RUN mkdir /usr/hotel-app
WORKDIR /usr/hotel-app

COPY package.json .
RUN npm install
COPY . .
CMD ['npm', 'run', 'watch']
