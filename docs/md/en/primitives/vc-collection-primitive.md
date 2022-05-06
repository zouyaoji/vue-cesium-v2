# PrimitiveCollection

The `vc-collection-primitive` component is used to load a collection of primitives.This is most often used with Scene#primitives, but PrimitiveCollection is also a primitive itself so collections can be added to collections forming a hierarchy.

## Example

### Load PrimitiveCollection with `vc-collection-primitive`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive @click="clicked" :show="show">
          <vc-collection-primitive-billboard :billboards="billboards1"></vc-collection-primitive-billboard>
          <vc-collection-primitive>
            <vc-collection-primitive-billboard :billboards="billboards2"></vc-collection-primitive-billboard>
          </vc-collection-primitive>
        </vc-collection-primitive>
        <vc-collection-primitive :polygons="polygons">
          <vc-primitive-model
            @click="clicked"
            :url="url"
            :model-matrix="modelMatrix"
            :scale="10000"
            :minimum-pixel-size="128"
            :maximum-scale="200000"
          >
          </vc-primitive-model>
          <vc-polygon :positions="positions"></vc-polygon>
        </vc-collection-primitive>
      </vc-viewer>
      <div class="demo-tool">
        <span>{{ show ? 'Hide' : 'Show' }}</span>
        <md-switch v-model="show"></md-switch>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          show: true,
          positions: [
            [105, 32],
            [106, 34],
            [107, 30]
          ],
          billboards1: [],
          billboards2: [],
          url: './statics/SampleData/models/CesiumAir/Cesium_Air.gltf',
          modelMatrix: {},
          polygons: [
            {
              positions: [
                [115, 37],
                [115, 32],
                [107, 33],
                [102, 31],
                [102, 35]
              ],
              appearance: {
                type: 'MaterialAppearance',
                options: {
                  material: 'green'
                }
              }
            },
            {
              positions: [
                { lng: 108.0, lat: 42.0 },
                { lng: 100.0, lat: 42.0 },
                { lng: 104.0, lat: 40.0 }
              ],
              appearance: {
                type: 'MaterialAppearance',
                options: {
                  material: 'red'
                }
              },
              depthFailAppearance: {
                type: 'MaterialAppearance',
                options: {
                  material: 'red'
                }
              }
            },
            {
              positions: [90.0, 41.0, 0.0, 85.0, 41.0, 500000.0, 80.0, 41.0, 0.0],
              appearance: {
                type: 'MaterialAppearance',
                options: {
                  material: 'blue'
                }
              }
            },
            {
              polygonHierarchy: {
                positions: [
                  [99, 30],
                  [85, 30],
                  [85, 40],
                  [99, 40]
                ],
                holes: [
                  {
                    positions: [
                      [97, 31],
                      [97, 39],
                      [87, 39],
                      [87, 31]
                    ],
                    holes: [
                      {
                        positions: [
                          [95, 33],
                          [89, 33],
                          [89, 37],
                          [95, 37]
                        ],
                        holes: [
                          {
                            positions: [
                              [93, 34],
                              [91, 34],
                              [91, 36],
                              [93, 36]
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              appearance: {
                type: 'MaterialAppearance',
                options: {
                  material: 'yellow'
                }
              }
            }
          ]
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const billboards1 = []
          const billboards2 = []
          for (var i = 0; i < 100; i++) {
            let billboard1 = {}
            billboard1.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
            billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
            billboard1.scale = 0.1
            billboards1.push(billboard1)

            let billboard2 = {}
            billboard2.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
            billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
            billboard2.scale = 0.15
            billboards2.push(billboard2)
          }
          this.billboards1 = billboards1
          this.billboards2 = billboards2
          this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
        },
        clicked(e) {
          console.log(e)
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-collection-primitive @click="clicked" :show="show">
        <vc-collection-primitive-billboard :billboards="billboards1"></vc-collection-primitive-billboard>
        <vc-collection-primitive>
          <vc-collection-primitive-billboard :billboards="billboards2"></vc-collection-primitive-billboard>
        </vc-collection-primitive>
      </vc-collection-primitive>
      <vc-collection-primitive :polygons="polygons">
        <vc-primitive-model
          @click="clicked"
          :url="url"
          :model-matrix="modelMatrix"
          :scale="10000"
          :minimum-pixel-size="128"
          :maximum-scale="200000"
        >
        </vc-primitive-model>
        <vc-polygon :positions="positions"></vc-polygon>
      </vc-collection-primitive>
    </vc-viewer>
    <div class="demo-tool">
      <span>{{ show ? 'Hide' : 'Show' }}</span>
      <md-switch v-model="show"></md-switch>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        positions: [
          [105, 32],
          [106, 34],
          [107, 30]
        ],
        billboards1: [],
        billboards2: [],
        url: './statics/SampleData/models/CesiumAir/Cesium_Air.gltf',
        modelMatrix: {},
        polygons: [
          {
            positions: [
              [115, 37],
              [115, 32],
              [107, 33],
              [102, 31],
              [102, 35]
            ],
            appearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'green'
              }
            }
          },
          {
            positions: [
              { lng: 108.0, lat: 42.0 },
              { lng: 100.0, lat: 42.0 },
              { lng: 104.0, lat: 40.0 }
            ],
            appearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'red'
              }
            },
            depthFailAppearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'red'
              }
            }
          },
          {
            positions: [90.0, 41.0, 0.0, 85.0, 41.0, 500000.0, 80.0, 41.0, 0.0],
            appearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'blue'
              }
            }
          },
          {
            polygonHierarchy: {
              positions: [
                [99, 30],
                [85, 30],
                [85, 40],
                [99, 40]
              ],
              holes: [
                {
                  positions: [
                    [97, 31],
                    [97, 39],
                    [87, 39],
                    [87, 31]
                  ],
                  holes: [
                    {
                      positions: [
                        [95, 33],
                        [89, 33],
                        [89, 37],
                        [95, 37]
                      ],
                      holes: [
                        {
                          positions: [
                            [93, 34],
                            [91, 34],
                            [91, 36],
                            [93, 36]
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            appearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'yellow'
              }
            }
          }
        ]
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const billboards1 = []
        const billboards2 = []
        for (var i = 0; i < 100; i++) {
          let billboard1 = {}
          billboard1.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
          billboard1.scale = 0.1
          billboards1.push(billboard1)

          let billboard2 = {}
          billboard2.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
          billboard2.scale = 0.15
          billboards2.push(billboard2)
        }
        this.billboards1 = billboards1
        this.billboards2 = billboards2
        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))
      },
      clicked(e) {
        console.log(e)
      }
    }
  }
</script>
```

## Instance Properties

| name              | type    | default | description                                                                                |
| ----------------- | ------- | ------- | ------------------------------------------------------------------------------------------ |
| show              | Boolean | `true`  | `optional` Determines if the primitives in the collection will be shown.                   |
| destroyPrimitives | Boolean | `true`  | `optional` Determines if primitives in the collection are destroyed when they are removed. |
| polygons          | Array   | `[]`   | `optional` Specify an array of polygons collections. The structure of the array object is the same as the attribute of the vc-polygon component. |

---

- Refer to the official document: **[PrimitiveCollection](https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| mousedown | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse is pressed on the collection of primitives. |
| mouseup | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse bounces on the collection of primitives. |
| click | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse clicks on the collection of primitives. |
| clickout | {button,surfacePosition,pickedFeature,type,windowPosition} | Touch when the mouse clicks outside the collection of primitives.|
| dblclick | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the left mouse button double-clicks the collection of primitives. |
| mousemove | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves on the collection of primitives. |
| mouseover | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves to the collection of primitives. |
| mouseout | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves out of the collection of primitives. |
---
