class VisibilityState {
  constructor () {
    this.states = new Cesium.ManagedArray()
    this.count = 0
  }

  hidePrimitiveCollection (primitiveCollection) {
    const { PrimitiveCollection, Cesium3DTileset, Model } = Cesium
    const length = primitiveCollection.length
    for (let i = 0; i < length; i++) {
      const primitive = primitiveCollection.get(i)
      if (primitive instanceof PrimitiveCollection) {
        this.hidePrimitiveCollection(primitive)
      } else {
        this.states.push(primitive.show)
        primitive instanceof Cesium3DTileset || primitive instanceof Model || (primitive.show = false)
      }
    }
  }

  restorePrimitiveCollection (primitiveCollection) {
    const { PrimitiveCollection } = Cesium
    const length = primitiveCollection.length
    for (let i = 0; i < length; i++) {
      const primitive = primitiveCollection.get(i)
      if (primitive instanceof PrimitiveCollection) {
        this.restorePrimitiveCollection(primitive)
      } else {
        primitive.show = this.states.get(this.count++)
      }
    }
  }

  hide (scene) {
    this.states.length = 0
    this.hidePrimitiveCollection(scene.primitives)
    this.hidePrimitiveCollection(scene.groundPrimitives)
  }

  restore (scene) {
    this.count = 0
    this.restorePrimitiveCollection(scene.primitives)
    this.restorePrimitiveCollection(scene.groundPrimitives)
  }
}

export default VisibilityState
