ARG NODE_VERSION
FROM node:${NODE_VERSION}
WORKDIR /usr/src/app
COPY . .
RUN npm install