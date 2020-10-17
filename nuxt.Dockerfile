FROM node:12.13-alpine

RUN apk add --no-cache git

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

ENV HOST 0.0.0.0

CMD ["npm", "run", "dev"]