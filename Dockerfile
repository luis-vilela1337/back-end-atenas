# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:18.17-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Create and change to the app directory.
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . . 
RUN npm run build

FROM node:18.17-alpine
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install --only=production
COPY --from=build /app/dist ./dist
RUN npm run build

CMD [ "yarn", "start:prod" ]
