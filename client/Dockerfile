# get an  operation system 
# install node runtime

FROM node:alpine

# copy files
WORKDIR /app
COPY . .

# install npm dependencies

RUN yarn install

EXPOSE 3001
# run application

CMD ["yarn","dev"]

