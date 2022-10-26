FROM node:16
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY tsconfig.json ./

RUN npm install
RUN npm install ts-node
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source

COPY . .
EXPOSE 8888
CMD [ "yarn", "dev" ]