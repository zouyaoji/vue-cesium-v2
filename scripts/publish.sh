###
 # @Author: zouyaoji@https://github.com/zouyaoji
 # @Date: 2021-09-16 09:28:13
 # @LastEditTime: 2021-12-17 09:35:43
 # @LastEditors: zouyaoji
 # @Description:
 # @FilePath: \vue-cesium-v2\scripts\publish.sh
###

#!/bin/sh

set -e

pnpm i --frozen-lockfile

pnpm build

npm publish --access public --registry ${REGISTRY}
cd -

echo "Publish completed"
