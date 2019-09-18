FROM node:8

COPY src/ /app/src
COPY package.json /app/package.json

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD npm start
