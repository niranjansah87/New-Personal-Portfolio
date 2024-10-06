FROM node:20

WORKDIR /portfolio

COPY . .

RUN yarn add latest

EXPOSE 3000

CMD ["yarn", "start"]

