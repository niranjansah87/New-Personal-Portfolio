FROM node:20

WORKDIR /portfolio
COPY . .
RUN yarn add latest
RUN npm run dev