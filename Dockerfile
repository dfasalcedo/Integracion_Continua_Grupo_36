FROM node:20.11.0

WORKDIR /integracion-continua
COPY package*.json .
RUN npm install

COPY . .

CMD npm start
