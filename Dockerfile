FROM node:14-alpine
WORKDIR /usr/hotel-app
COPY package.json ./usr/hotel-app
RUN npm install
COPY . .
CMD ['npm', 'watch']
