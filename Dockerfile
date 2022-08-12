FROM node:16-alpine

USER node

WORKDIR /home/node/app

CMD [ "/home/node/app/start.sh"]