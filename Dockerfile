FROM node:latest
WORKDIR /usr/src/app
RUN apt update -
RUN apt upgrade -y
RUN apt install lsof
COPY . .
# COPY package-docker.json ./package.json
RUN npm install
RUN yarn build

# EXPOSE 3000
CMD [ "yarn", "preview", "--host" ]