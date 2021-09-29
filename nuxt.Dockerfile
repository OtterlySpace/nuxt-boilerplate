FROM node:14-alpine

RUN apk add --no-cache \
	git \
	ca-certificates \
	python3 make g++

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV HOST 0.0.0.0

CMD ["npm", "run", "dev"]