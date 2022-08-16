FROM node:16-alpine

RUN apk add git & npm i -g vercel

USER node

WORKDIR /home/node/app

CMD [ "/home/node/app/start.sh"]