FROM node:14-alpine
WORKDIR /usr/hotel-app
COPY package.json ./hotel-app
RUN npm install
COPY . .
CMD ['npm', 'watch']
