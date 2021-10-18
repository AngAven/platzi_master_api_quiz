FROM node:14
WORKDIR /srv/app
COPY ["./", "/srv/app"]
RUN npm install
CMD ["node", "index.js"]