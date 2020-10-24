FROM node:10 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY client /usr/src/app/client
COPY server /usr/src/app/server
WORKDIR /usr/src/app/client
RUN npm install
WORKDIR /usr/src/app/server
RUN npm install

FROM node:10
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY --from builder client/dist /usr/src/app/client/dist/
COPY --from builder server/dist /usr/src/app/server/dist/
EXPOSE 8082
ENTRYPOINT [ "node" ]
CMD ["/usr/src/app/server/dist/server.js"]
