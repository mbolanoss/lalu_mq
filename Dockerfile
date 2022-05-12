FROM node:latest

RUN mkdir /app
WORKDIR /app

COPY /src .

RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]

#cmd to run rabbitmq container
#docker run -tid --name rabbitmq -e RABBITMQ_DEFAULT_USER=lalu_mq -e RABBITMQ_DEFAULT_PASS=lalu_mq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management