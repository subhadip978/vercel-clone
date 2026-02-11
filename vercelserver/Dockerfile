
FROM ubuntu:focal

RUN apt-get update
RUN apt-get install -y curl
RUN sudo install -y node
RUN apt-get  install -y git 

WORKDIR /home/app

COPY main.sh main.sh
COPY script.js script.js
COPY package*.json .

RUN npm install

# Make shell script executable
RUN chmod +x main.sh
RUN chmod +x script.js

# Run  logic
ENTRYPOINT ["/home/app/main.sh"]
# So when ECS or Docker runs this image, it executes: /home/app/main.sh
