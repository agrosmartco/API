FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm i express
COPY . /app
CMD npm start
EXPOSE 8082
