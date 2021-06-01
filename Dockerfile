FROM node:14-alpine
WORKDIR /usr/hotel-app
RUN npm install
COPY . .
CMD ['npm', 'watch']
