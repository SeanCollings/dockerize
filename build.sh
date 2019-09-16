#!/bin/bash

echo "hello world"


# git clone http://app-fancy.git
rm -rf app/dist
docker-compose run --rm app npm run build
cp app/dist/index.html server/assets/index.html
cp app/dist/index_bundle.js server/assets/index_bundle.js

# rm -rf server/node_modules
# docker-compose run --rm server npm i --production
docker-compose run --rm server npm i

docker rmi -f app-fancy:preview
docker build --no-cache --force-rm -t app-fancy:preview .

# docker tag app-fancy:preview app-fancy:latest 
# docker tag app-fancy:preview app-fancy:rc1.2.3 
# docker push app-fancy:latest artifactory/docker/app-fancy:latest 
# docker push app-fancy:latest artifactory/docker/app-fancy:rc1.2.3  