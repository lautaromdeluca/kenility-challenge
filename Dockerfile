FROM node:20.18.3-alpine

EXPOSE 4000
WORKDIR /usr/app
COPY ./ ./
RUN npm install
CMD ["npm", "run" , "start"]
