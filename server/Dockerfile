# get an  operation system 
# install node runtime

FROM node:alpine

# copy files
WORKDIR /app
COPY . .

# install npm dependencies

RUN yarn install

EXPOSE 8080
# run application

CMD ["yarn","start"]

