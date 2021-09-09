#! /usr/bin/bash
###
 # @Author: zouyaoji@https://github.com/zouyaoji
 # @Date: 2021-09-09 13:45:45
 # @LastEditTime: 2021-09-09 13:48:10
 # @LastEditors: zouyaoji
 # @Description:
 # @FilePath: \vue-cesium-v2\scripts\publish.sh
###

# Do not run this file without setting the environment variables, you will end up fatal error
# If you wish to run this locally, please change the env variable before running this.
# echo "//${REGISTRY}/:_authToken=${TOKEN}" > .npmrc

cat package.json \
| grep -v '"private":' \
| grep -v '"version":' \
| sed "s/\(\"name\": \"vue-cesium\"\)/\1,\n  \"version\": \"${TAG_VERSION}\"/g" > package.json.bak

cat package.json.bak > package.json
npm publish --registry ${REGISTRY}
