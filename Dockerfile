FROM node:carbon

RUN mkdir /usr/src/app -p
WORKDIR /usr/src/app

COPY ./src /usr/src/app

RUN cd /usr/src/app; rm -rf node_modules; npm i

EXPOSE 8080

CMD ["node", "index.js"]