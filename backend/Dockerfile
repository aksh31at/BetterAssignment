FROM node:18

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY /src /src

EXPOSE 4000

CMD ["node", "src/index.js"]

