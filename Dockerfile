# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
COPY krampoline/ ./
EXPOSE 3000
CMD [ "node", "index.js" ]