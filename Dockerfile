FROM docker-registry.gray.net/common/node:10.10.0

ENV NODE_ENV=production
EXPOSE 3000

WORKDIR /service
COPY /server /service

USER nobody

CMD ["npm", "run", "start:prod"]
