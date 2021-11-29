<template>
  <div id="cesiumContainer" ref="viewer" style="width:100%; height:100%;">
    <slot></slot>
  </div>
</template>

<script>
import bindEvents from '../../utils/bindEvent.js'
import { Events } from '../../utils/events'
import services from '../../mixins/services'
import mergeDescriptors from '../../utils/mergeDescriptors.js'
import { dirname, isArray } from '../../utils/util.js'
import { getMars3dConfig } from './loadUtil'

let loadLibs = []

export default {
  name: 'vc-viewer',
  mixins: [services],
  props: {
    cesiumPath: String,
    animation: {
      type: Boolean,
      default: false
    },
    baseLayerPicker: {
      type: Boolean,
      default: false
    },
    fullscreenButton: {
      type: Boolean,
      default: false
    },
    vrButton: {
      type: Boolean,
      default: false
    },
    geocoder: {
      type: [Boolean, Array],
      default: false
    },
    homeButton: {
      type: Boolean,
      default: false
    },
    infoBox: {
      type: Boolean,
      default: true
    },
    sceneModePicker: {
      type: Boolean,
      default: false
    },
    selectionIndicator: {
      type: Boolean,
      default: true
    },
    timeline: {
      type: Boolean,
      default: false
    },
    navigationHelpButton: {
      type: Boolean,
      default: false
    },

    navigationInstructionsInitiallyVisible: {
      type: Boolean,
      default: false
    },
    scene3DOnly: {
      type: Boolean,
      default: false
    },
    shouldAnimate: {
      type: Boolean,
      default: false
    },
    clockViewModel: Object,
    selectedImageryProviderViewModel: Object,
    imageryProviderViewModels: Object,
    selectedTerrainProviderViewModel: Object,
    terrainProviderViewModels: Object,
    imageryProvider: Object,
    terrainProvider: Object,
    skyBox: [Object, Boolean],
    skyAtmosphere: [Object, Boolean],
    fullscreenElement: {
      type: [Element, String]
    },
    useDefaultRenderLoop: {
      type: Boolean,
      default: true
    },
    targetFrameRate: Number,
    showRenderLoopErrors: {
      type: Boolean,
      default: true
    },
    automaticallyTrackDataSourceClocks: {
      type: Boolean,
      default: true
    },
    contextOptions: Object,
    sceneMode: {
      type: Number,
      default: 3
    },
    mapProjection: Object,
    globe: Object,
    orderIndependentTranslucency: {
      type: Boolean,
      default: true
    },
    creditContainer: [Element, String],
    creditViewport: [Element, String],
    dataSources: Object,
    terrainExaggeration: {
      type: Number,
      default: 1.0
    },
    shadows: {
      type: Boolean,
      default: false
    },
    terrainShadows: {
      type: Number,
      default: 3
    },
    mapMode2D: {
      type: Number,
      default: 1
    },
    projectionPicker: {
      type: Boolean,
      default: false
    },
    requestRenderMode: {
      type: Boolean,
      default: false
    },
    maximumRenderTimeChange: {
      type: Number,
      default: 0.0
    },
    logo: {
      type: Boolean,
      default: true
    },
    accessToken: String,
    camera: {
      type: Object,
      default: function () {
        return {
          position: {
            lng: 105,
            lat: 29.999999999999993,
            height: 19059568.497290563
          },
          heading: 360,
          pitch: -90,
          roll: 0
        }
      }
    },
    navigation: {
      // for supermap
      type: Boolean,
      default: false
    },
    TZcode: {
      type: String
      // default: new Date().getTimezoneOffset() === 0 ? 'UTC' : 'UTC' + '+' + -(new Date().getTimezoneOffset() / 60)
    },
    UTCoffset: {
      type: Number
      // default: -new Date().getTimezoneOffset()
    },
    removeCesiumScript: {
      type: Boolean,
      default: true
    },
    autoSortImageryLayers: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    selectionIndicator (val) {
      const { viewer, viewerContainer } = this
      if (Cesium.defined(viewer.selectionIndicator) && !viewer.selectionIndicator.isDestroyed() && !val) {
        const selectionIndicatorContainer = viewer.selectionIndicator.container
        viewerContainer.removeChild(selectionIndicatorContainer)
        viewer.selectionIndicator.destroy()
        viewer._selectionIndicator = undefined
      } else if (!Cesium.defined(viewer.selectionIndicator) || viewer.selectionIndicator.isDestroyed()) {
        const selectionIndicatorContainer = document.createElement('div')
        selectionIndicatorContainer.className = 'cesium-viewer-selectionIndicatorContainer'
        viewerContainer.appendChild(selectionIndicatorContainer)
        const selectionIndicator = new Cesium.SelectionIndicator(selectionIndicatorContainer, viewer.scene)
        viewer._selectionIndicator = selectionIndicator
      }
      viewer.widgetResized.raiseEvent()
    },
    infoBox (val) {
      const { viewer, viewerContainer } = this
      if (Cesium.defined(viewer.infoBox) && !viewer.infoBox.isDestroyed() && !val) {
        const infoBoxContainer = viewer.infoBox.container
        viewerContainer.removeChild(infoBoxContainer)
        viewer.infoBox.destroy()
        viewer._infoBox = undefined
      } else if (!Cesium.defined(viewer.infoBox) || viewer.infoBox.isDestroyed()) {
        const infoBoxContainer = document.createElement('div')
        infoBoxContainer.className = 'cesium-viewer-infoBoxContainer'
        viewerContainer.appendChild(infoBoxContainer)
        const infoBox = new Cesium.InfoBox(infoBoxContainer)
        const infoBoxViewModel = infoBox.viewModel
        viewer._eventHelper.add(infoBoxViewModel.cameraClicked, viewer._onInfoBoxCameraClicked, viewer)
        viewer._eventHelper.add(infoBoxViewModel.closeClicked, viewer._onInfoBoxClockClicked, viewer)
        const events = ['cameraClicked', 'closeClicked']
        infoBoxViewModel && bindEvents.call(this, infoBoxViewModel, events, true)
        viewer._infoBox = infoBox
      }
      viewer.forceResize()
      viewer.widgetResized.raiseEvent()
    },
    geocoder (val) {
      const { viewer, resizeToolbar } = this
      const toolbar = viewer._toolbar
      if (Cesium.defined(viewer.geocoder) && !viewer.geocoder.isDestroyed() && !val) {
        const geocoderContainer = viewer.geocoder.container
        toolbar.removeChild(geocoderContainer)
        viewer.geocoder.destroy()
        viewer._geocoder = undefined
      } else if (!Cesium.defined(viewer.geocoder) || viewer.geocoder.isDestroyed()) {
        const geocoderContainer = document.createElement('div')
        geocoderContainer.className = 'cesium-viewer-geocoderContainer'
        toolbar.appendChild(geocoderContainer)
        const geocoder = new Cesium.Geocoder({
          container: geocoderContainer,
          geocoderServices: Cesium.defined(this.geocoder)
            ? Array.isArray(this.geocoder)
                ? this.geocoder
                : [this.geocoder]
            : undefined,
          scene: viewer.scene,
          viewer: viewer
        })
        viewer._eventHelper.add(geocoder.viewModel.search.beforeExecute, viewer._clearObjects, viewer)
        viewer._geocoder = geocoder
        resizeToolbar(toolbar, geocoderContainer)
      }
      viewer.widgetResized.raiseEvent()
    },
    homeButton (val) {
      const { viewer, resizeToolbar } = this
      const toolbar = viewer._toolbar
      if (Cesium.defined(viewer.homeButton) && !viewer.homeButton.isDestroyed() && !val) {
        viewer.homeButton.destroy()
        viewer._homeButton = undefined
      } else if (!Cesium.defined(viewer.homeButton) || viewer.homeButton.isDestroyed()) {
        const homeButton = new Cesium.HomeButton(toolbar, viewer.scene)
        if (Cesium.defined(viewer.geocoder)) {
          viewer._eventHelper.add(homeButton.viewModel.command.afterExecute, function () {
            const viewModel = viewer.geocoder.viewModel
            viewModel.searchText = ''
            if (viewModel.isSearchInProgress) {
              viewModel.search()
            }
          })
        }
        viewer._eventHelper.add(homeButton.viewModel.command.beforeExecute, viewer._clearTrackedObject, viewer)
        viewer._homeButton = homeButton
        resizeToolbar(toolbar, homeButton)
      }
      viewer.widgetResized.raiseEvent()
    },
    sceneModePicker (val) {
      const { viewer, resizeToolbar } = this
      const toolbar = viewer._toolbar
      if (Cesium.defined(viewer.sceneModePicker) && !viewer.sceneModePicker.isDestroyed() && !val) {
        viewer.sceneModePicker.destroy()
        viewer._sceneModePicker = undefined
      } else if (!Cesium.defined(viewer.sceneModePicker) || viewer.sceneModePicker.isDestroyed()) {
        if (this.sceneModePicker === true && this.scene3DOnly) {
          throw new Cesium.DeveloperError('options.sceneModePicker is not available when options.scene3DOnly is set to true.')
        }
        if (!this.scene3DOnly && this.sceneModePicker === true) {
          const sceneModePicker = new Cesium.SceneModePicker(toolbar, viewer.scene)
          viewer._sceneModePicker = sceneModePicker
          resizeToolbar(toolbar, sceneModePicker)
        }
      }
      viewer.widgetResized.raiseEvent()
    },
    projectionPicker (val) {
      const { viewer, resizeToolbar } = this
      const toolbar = viewer._toolbar
      if (Cesium.defined(viewer.projectionPicker) && !viewer.projectionPicker.isDestroyed() && !val) {
        viewer.projectionPicker.destroy()
        viewer._projectionPicker = undefined
      } else if (!Cesium.defined(viewer.projectionPicker) || viewer.projectionPicker.isDestroyed()) {
        const projectionPicker = new Cesium.ProjectionPicker(toolbar, viewer.scene)
        viewer._projectionPicker = projectionPicker
        resizeToolbar(toolbar, projectionPicker)
      }
      viewer.widgetResized.raiseEvent()
    },
    baseLayerPicker (val) {
      const { viewer, resizeToolbar } = this
      const toolbar = viewer._toolbar
      if (Cesium.defined(viewer.baseLayerPicker) && !viewer.baseLayerPicker.isDestroyed() && !val) {
        viewer.baseLayerPicker.destroy()
        viewer._baseLayerPicker = undefined
        viewer.imageryLayers.remove(viewer.imageryLayers.get(viewer.imageryLayers.length - 1))
      } else if (!Cesium.defined(viewer.baseLayerPicker) || viewer.baseLayerPicker.isDestroyed()) {
        const createBaseLayerPicker =
          (!Cesium.defined(viewer.globe) || this.globe !== false) &&
          (!Cesium.defined(viewer.baseLayerPicker) || this.baseLayerPicker !== false)

        if (createBaseLayerPicker && Cesium.defined(this.imageryProvider)) {
          throw new Cesium.DeveloperError(`options.imageryProvider is not available when using the BaseLayerPicker widget.
Either specify options.selectedImageryProviderViewModel instead or set options.baseLayerPicker to false.`)
        }
        if (!createBaseLayerPicker && Cesium.defined(this.selectedImageryProviderViewModel)) {
          throw new Cesium.DeveloperError(`options.selectedImageryProviderViewModel is not available when not using the BaseLayerPicker widget.
Either specify options.imageryProvider instead or set options.baseLayerPicker to true.`)
        }
        if (createBaseLayerPicker && Cesium.defined(this.terrainProvider)) {
          throw new Cesium.DeveloperError(`options.terrainProvider is not available when using the BaseLayerPicker widget.
Either specify options.selectedTerrainProviderViewModel instead or set options.baseLayerPicker to false.`)
        }
        if (!createBaseLayerPicker && Cesium.defined(this.selectedTerrainProviderViewModel)) {
          throw new Cesium.DeveloperError(`options.selectedTerrainProviderViewModel is not available when not using the BaseLayerPicker widget.
Either specify options.terrainProvider instead or set options.baseLayerPicker to true.`)
        }
        if (createBaseLayerPicker) {
          const imageryProviderViewModels = Cesium.defaultValue(
            this.imageryProviderViewModels,
            Cesium.createDefaultImageryProviderViewModels()
          )
          const terrainProviderViewModels = Cesium.defaultValue(
            this.terrainProviderViewModels,
            Cesium.createDefaultTerrainProviderViewModels()
          )
          const baseLayerPicker = new Cesium.BaseLayerPicker(toolbar, {
            globe: viewer.scene.globe,
            imageryProviderViewModels: imageryProviderViewModels,
            selectedImageryProviderViewModel: imageryProviderViewModels[0],
            terrainProviderViewModels: terrainProviderViewModels,
            selectedTerrainProviderViewModel: terrainProviderViewModels[0]
          })
          const elements = toolbar.getElementsByClassName('cesium-baseLayerPicker-dropDown')

          const baseLayerPickerDropDown = elements[0]
          viewer._baseLayerPickerDropDown = baseLayerPickerDropDown
          viewer._baseLayerPicker = baseLayerPicker
          viewer.imageryLayers.raiseToTop(viewer.imageryLayers.get(0))
          resizeToolbar(toolbar, baseLayerPicker)
        }
      }
      viewer.widgetResized.raiseEvent()
    },
    navigationHelpButton (val) {
      const { viewer, resizeToolbar } = this
      const toolbar = viewer._toolbar
      if (Cesium.defined(viewer.navigationHelpButton) && !viewer.navigationHelpButton.isDestroyed() && !val) {
        viewer.navigationHelpButton.destroy()
        viewer._navigationHelpButton = undefined
      } else if (!Cesium.defined(viewer.navigationHelpButton) || viewer.navigationHelpButton.isDestroyed()) {
        let showNavHelp = true
        try {
          if (Cesium.defined(window.localStorage)) {
            const hasSeenNavHelp = window.localStorage.getItem('cesium-hasSeenNavHelp')
            if (Cesium.defined(hasSeenNavHelp) && Boolean(hasSeenNavHelp)) {
              showNavHelp = false
            } else {
              window.localStorage.setItem('cesium-hasSeenNavHelp', 'true')
            }
          }
        } catch (e) {}
        const navigationHelpButton = new Cesium.NavigationHelpButton({
          container: toolbar,
          instructionsInitiallyVisible: Cesium.defaultValue(this.navigationInstructionsInitiallyVisible, showNavHelp)
        })
        viewer._navigationHelpButton = navigationHelpButton
        resizeToolbar(toolbar, navigationHelpButton)
      }
      viewer.widgetResized.raiseEvent()
    },
    animation (val) {
      const { viewer, viewerContainer } = this
      if (Cesium.defined(viewer.animation) && !viewer.animation.isDestroyed() && !val) {
        const animationContainer = viewer.animation.container
        viewerContainer.removeChild(animationContainer)
        viewer.animation.destroy()
        viewer._animation = undefined
      } else if (!Cesium.defined(viewer.animation) || viewer.animation.isDestroyed()) {
        const animationContainer = document.createElement('div')
        animationContainer.className = 'cesium-viewer-animationContainer'
        this.viewerContainer.appendChild(animationContainer)
        const animation = new Cesium.Animation(animationContainer, new Cesium.AnimationViewModel(viewer.clockViewModel))
        animation.viewModel.dateFormatter = this.localeDateTimeFormatter
        animation.viewModel.timeFormatter = this.localeTimeFormatter
        viewer._animation = animation
      }
      viewer.forceResize()
      viewer.widgetResized.raiseEvent()
    },

    timeline (val) {
      const { viewer, viewerContainer, onTimelineScrubfunction } = this
      if (Cesium.defined(viewer.timeline) && !viewer.timeline.isDestroyed() && !val) {
        const timelineContainer = viewer.timeline.container
        viewerContainer.removeChild(timelineContainer)
        viewer.timeline.destroy()
        viewer._timeline = undefined
      } else if (!Cesium.defined(viewer.timeline) || viewer.timeline.isDestroyed()) {
        const timelineContainer = document.createElement('div')
        timelineContainer.className = 'cesium-viewer-timelineContainer'
        viewerContainer.appendChild(timelineContainer)
        const timeline = new Cesium.Timeline(timelineContainer, viewer.clock)
        const that = this
        timeline.makeLabel = (time) => {
          return that.localeDateTimeFormatter(time)
        }
        timeline.addEventListener('settime', onTimelineScrubfunction, false)
        timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime)
        viewer._timeline = timeline
      }
      viewer.forceResize()
      viewer.widgetResized.raiseEvent()
    },
    fullscreenButton (val) {
      const { viewer, viewerContainer } = this
      if (Cesium.defined(viewer.fullscreenButton) && !viewer.fullscreenButton.isDestroyed() && !val) {
        const fullscreenContainer = viewer.fullscreenButton.container
        viewerContainer.removeChild(fullscreenContainer)
        viewer.fullscreenButton.destroy()
        viewer._fullscreenButton = undefined
      } else if (!Cesium.defined(viewer.fullscreenButton) || viewer.fullscreenButton.isDestroyed()) {
        const fullscreenContainer = document.createElement('div')
        fullscreenContainer.className = 'cesium-viewer-fullscreenContainer'
        viewerContainer.appendChild(fullscreenContainer)
        const fullscreenButton = new Cesium.FullscreenButton(fullscreenContainer, this.$refs.viewer)
        viewer._fullscreenButton = fullscreenButton
      }
      viewer.forceResize()
      viewer.widgetResized.raiseEvent()
    },
    fullscreenElement (val) {
      const { viewer } = this
      if (!Cesium.defined(viewer.fullscreenButton)) {
        return
      }
      if (Cesium.defined(val)) {
        this.viewer.fullscreenButton.viewModel.fullscreenElement = val
      }
    },
    vrButton (val) {
      const { viewer, enableVRUI, viewerContainer } = this
      if (Cesium.defined(viewer.vrButton) && !viewer.vrButton.isDestroyed() && !val) {
        const vrContainer = viewer.vrButton.container
        viewerContainer.removeChild(vrContainer)
        viewer.vrButton.destroy()
        viewer._vrButton = undefined
      } else if (!Cesium.defined(viewer.vrButton) || viewer.vrButton.isDestroyed()) {
        const vrContainer = document.createElement('div')
        vrContainer.className = 'cesium-viewer-vrContainer'
        viewerContainer.appendChild(vrContainer)
        const vrButton = new Cesium.VRButton(vrContainer, viewer.scene, viewerContainer)
        const viewModelCommand = vrButton.viewModel._command
        vrButton.viewModel._command = function (VRButtonViewModel) {
          viewModelCommand()
          enableVRUI(viewer, VRButtonViewModel.isVRMode)
        }
        viewer._vrButton = vrButton
      }
      viewer.forceResize()
      viewer.widgetResized.raiseEvent()
    },
    useDefaultRenderLoop (val) {
      this.viewer.useDefaultRenderLoop = val
    },
    sceneMode (val) {
      const { viewer } = this
      if (
        Cesium.SceneMode.COLUMBUS_VIEW === val ||
        Cesium.SceneMode.MORPHING === val ||
        Cesium.SceneMode.SCENE2D === val ||
        Cesium.SceneMode.SCENE3D === val
      ) {
        viewer.scene.mode = val
      }
    },
    shouldAnimate (val) {
      const { viewer } = this
      viewer.clock.shouldAnimate = val
    },
    terrainExaggeration (val) {
      const { viewer } = this
      viewer.scene._terrainExaggeration = val
    },
    shadows (val) {
      const { viewer } = this
      viewer.scene.shadowMap.enabled = val
    },
    terrainProvider (val) {
      const { viewer } = this
      viewer.terrainProvider = val
    },
    camera: {
      handler (val) {
        this.setCamera(val)
      },
      deep: true
    },
    imageryProvider (val, oldvalue) {
      const { viewer } = this
      if (Cesium.defined(val)) {
        for (let i = 0; i < viewer.imageryLayers.length; i++) {
          viewer.imageryLayers[i].imageryProvider === oldvalue && viewer.imageryLayers.remove(viewer.imageryLayers[i])
        }
        viewer.imageryLayers.addImageryProvider(val)
      }
    }
  },
  methods: {
    onTimelineScrubfunction (e) {
      const clock = e.clock
      clock.currentTime = e.timeJulian
      clock.shouldAnimate = false
    },
    resizeToolbar (parent, child) {
      Array.prototype.slice.call(parent.children).forEach((element) => {
        switch (element.className) {
          case 'cesium-viewer-geocoderContainer':
            element.customIndex = 1
            break
          case 'cesium-button cesium-toolbar-button cesium-home-button':
            element.customIndex = 2
            break
          case 'cesium-sceneModePicker-wrapper cesium-toolbar-button':
            element.customIndex = 3
            break
          case 'cesium-projectionPicker-wrapper cesium-toolbar-button':
            element.customIndex = 4
            break
          case 'cesium-button cesium-toolbar-button':
          case 'cesium-baseLayerPicker-dropDown':
            element.customIndex = 5
            break
          case 'cesium-navigationHelpButton-wrapper':
            element.customIndex = 6
            break
        }
      })
      const arr = []
      Array.prototype.slice.call(parent.children).forEach((element) => {
        arr.push(element)
      })
      arr.sort(function (a, b) {
        return a.customIndex - b.customIndex
      })
      for (let i = 0; i < arr.length; i++) {
        parent.appendChild(arr[i])
      }
    },
    enableVRUI (viewer, enabled) {
      const geocoder = viewer._geocoder
      const homeButton = viewer._homeButton
      const sceneModePicker = viewer._sceneModePicker
      const projectionPicker = viewer._projectionPicker
      const baseLayerPicker = viewer._baseLayerPicker
      const animation = viewer._animation
      const timeline = viewer._timeline
      const fullscreenButton = viewer._fullscreenButton
      const infoBox = viewer._infoBox
      const selectionIndicator = viewer._selectionIndicator
      const visibility = enabled ? 'hidden' : 'visible'
      if (Cesium.defined(geocoder)) {
        geocoder.container.style.visibility = visibility
      }
      if (Cesium.defined(homeButton)) {
        homeButton.container.style.visibility = visibility
      }
      if (Cesium.defined(sceneModePicker)) {
        sceneModePicker.container.style.visibility = visibility
      }
      if (Cesium.defined(projectionPicker)) {
        projectionPicker.container.style.visibility = visibility
      }
      if (Cesium.defined(baseLayerPicker)) {
        baseLayerPicker.container.style.visibility = visibility
      }
      if (Cesium.defined(animation)) {
        animation.container.style.visibility = visibility
      }
      if (Cesium.defined(timeline)) {
        timeline.container.style.visibility = visibility
      }
      if (Cesium.defined(fullscreenButton) && fullscreenButton.viewModel.isFullscreenEnabled) {
        fullscreenButton.container.style.visibility = visibility
      }
      if (Cesium.defined(infoBox)) {
        infoBox.container.style.visibility = visibility
      }
      if (Cesium.defined(selectionIndicator)) {
        selectionIndicator.container.style.visibility = visibility
      }
      if (viewer._container) {
        const right = enabled || !Cesium.defined(fullscreenButton) ? 0 : fullscreenButton.container.clientWidth
        viewer._vrButton.container.style.right = right + 'px'
        viewer.forceResize()
      }
    },
    init () {
      this.Cesium = Cesium
      const $el = this.$refs.viewer
      const accessToken = this.accessToken
        ? this.accessToken
        : typeof this._Cesium !== 'undefined' && Object.prototype.hasOwnProperty.call(this._Cesium(), 'accessToken')
          ? this._Cesium().accessToken
          : this.accessToken

      Cesium.Ion.defaultAccessToken = accessToken
      const {
        animation,
        baseLayerPicker,
        fullscreenButton,
        vrButton,
        geocoder,
        homeButton,
        infoBox,
        sceneModePicker,
        selectionIndicator,
        timeline,
        navigationHelpButton,
        navigationInstructionsInitiallyVisible,
        scene3DOnly,
        shouldAnimate,
        clockViewModel,
        selectedImageryProviderViewModel,
        imageryProviderViewModels,
        selectedTerrainProviderViewModel,
        terrainProviderViewModels,
        imageryProvider,
        terrainProvider,
        skyBox,
        skyAtmosphere,
        fullscreenElement,
        useDefaultRenderLoop,
        targetFrameRate,
        showRenderLoopErrors,
        automaticallyTrackDataSourceClocks,
        contextOptions,
        sceneMode,
        mapProjection,
        globe,
        orderIndependentTranslucency,
        creditContainer,
        creditViewport,
        dataSources,
        terrainExaggeration,
        shadows,
        terrainShadows,
        mapMode2D,
        projectionPicker,
        requestRenderMode,
        maximumRenderTimeChange,
        navigation,
        registerEvents
      } = this
      const url = Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
      const options = {
        animation,
        baseLayerPicker,
        fullscreenButton,
        vrButton,
        geocoder,
        homeButton,
        infoBox,
        sceneModePicker,
        selectionIndicator,
        timeline,
        navigationHelpButton,
        navigationInstructionsInitiallyVisible,
        scene3DOnly,
        shouldAnimate,
        clockViewModel,
        selectedImageryProviderViewModel,
        imageryProviderViewModels,
        selectedTerrainProviderViewModel,
        terrainProviderViewModels,
        imageryProvider: this.isEmptyObj(imageryProvider)
          ? Cesium.defined(Cesium.TileMapServiceImageryProvider)
              ? new Cesium.TileMapServiceImageryProvider({
                  url: url
                })
              : Cesium.createTileMapServiceImageryProvider({ url: url })
          : imageryProvider,
        terrainProvider,
        skyBox,
        skyAtmosphere,
        fullscreenElement: this.isEmptyObj(fullscreenElement) ? $el : fullscreenElement,
        useDefaultRenderLoop,
        targetFrameRate,
        showRenderLoopErrors,
        automaticallyTrackDataSourceClocks,
        contextOptions,
        sceneMode,
        mapProjection,
        globe,
        orderIndependentTranslucency,
        creditContainer,
        creditViewport,
        dataSources,
        terrainExaggeration,
        shadows,
        terrainShadows,
        mapMode2D,
        projectionPicker,
        requestRenderMode,
        maximumRenderTimeChange,
        navigation
      }
      this.removeNullItem(options)

      if (Cesium.VERSION >= '1.83') {
        delete options.terrainExaggeration
      }
      let viewer = {}
      if (globalThis.mars3d) {
        this.map = new mars3d.Map($el.id, options)
        viewer = this.map?._viewer
      } else if (globalThis.DC) {
        this.dcViewer = new DC.Viewer($el.id, options)
        viewer = this.dcViewer?.delegate
      } else if (globalThis.XE) {
        this.earth = new globalThis.XE.Earth($el, options)
        viewer = this.earth?.czm.viewer
      } else {
        viewer = new Cesium.Viewer($el, options)
      }

      this.viewer = viewer

      if (Cesium.VERSION >= '1.83') {
        viewer.scene.globe.terrainExaggeration = terrainExaggeration
      }

      if (Cesium.defined(this.camera)) {
        this.setCamera(this.camera)
      }

      const that = this
      const listener = that.$listeners['update:camera']
      listener &&
        viewer.camera.changed.addEventListener(() => {
          const cartographic = viewer.camera.positionCartographic
          let camera
          if (that.camera.position.lng) {
            camera = {
              position: {
                lng: Cesium.Math.toDegrees(cartographic.longitude),
                lat: Cesium.Math.toDegrees(cartographic.latitude),
                height: cartographic.height
              },
              heading: Cesium.Math.toDegrees(viewer.camera.heading || 360),
              pitch: Cesium.Math.toDegrees(viewer.camera.pitch || -90),
              roll: Cesium.Math.toDegrees(viewer.camera.roll || 0)
            }
          } else {
            camera = {
              position: {
                x: viewer.camera.position.x,
                y: viewer.camera.position.y,
                z: viewer.camera.position.z
              },
              heading: viewer.camera.heading || 2 * Math.PI,
              pitch: viewer.camera.pitch || -Math.PI / 2,
              roll: viewer.camera.roll || 0
            }
          }

          if (listener) {
            that.$emit('update:camera', camera)
          }
        })
      if (Cesium.defined(viewer.animation)) {
        viewer.animation.viewModel.dateFormatter = this.localeDateTimeFormatter
        viewer.animation.viewModel.timeFormatter = this.localeTimeFormatter
      }
      if (Cesium.defined(viewer.timeline)) {
        viewer.timeline.makeLabel = (time) => {
          return that.localeDateTimeFormatter(time)
        }
        viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime)
      }
      this.viewerContainer = viewer._element
      if (Cesium.defined(Cesium.SuperMapImageryProvider) && !this.logo) {
        const credit = viewer.scene.frameState.creditDisplay
        credit.container.removeChild(credit._imageContainer)
      }
      if (!this.logo) {
        viewer.cesiumWidget.creditContainer.style.display = 'none'
      }
      viewer.widgetResized = new Cesium.Event()
      viewer.imageryLayers.layerAdded.addEventListener(this.layerAdded)
      registerEvents(true)
      // globalThis.XE
      //   ? this.$emit('ready', { Cesium, viewer, earth: this.earth, vm: this })
      //   : this.$emit('ready', { Cesium, viewer, vm: this })
      const readyObj = {
        Cesium,
        viewer,
        vm: this
      }
      if (globalThis.XE) {
        Object.assign(readyObj, {
          earth: this.earth
        })
      } else if (globalThis.mars3d) {
        Object.assign(readyObj, {
          map: this.map
        })
      } else if (globalThis.DC) {
        Object.assign(readyObj, {
          dcViewer: this.dcViewer
        })
      }

      const listenerReady = this.$listeners.ready
      listenerReady && this.$emit('ready', readyObj)
      this._mounted = true
      return { Cesium, viewer, vm: this }
    },
    setCamera (val) {
      const { viewer } = this
      const position = val.position
      if (position.lng && position.lat) {
        viewer.camera.setView({
          destination: Cesium.Cartesian3.fromDegrees(
            position.lng,
            position.lat,
            position.height || 0,
            viewer.scene.globe.ellipsoid
          ),
          orientation: {
            heading: Cesium.Math.toRadians(val.heading || 360),
            pitch: Cesium.Math.toRadians(val.pitch || -90),
            roll: Cesium.Math.toRadians(val.roll || 0)
          }
        })
      } else if (position.x && position.y && position.z) {
        viewer.camera.setView({
          destination: new Cesium.Cartesian3(position.x, position.y, position.z),
          orientation: {
            heading: val.heading || 2 * Math.PI,
            pitch: val.pitch || -Math.PI / 2,
            roll: val.roll || 0
          }
        })
      }
    },
    layerAdded (layer) {
      const { viewer, autoSortImageryLayers } = this
      if (viewer.baseLayerPicker) {
        viewer.imageryLayers.raiseToTop(layer)
      }
      // 维护影像图层顺序
      if (autoSortImageryLayers) {
        layer.sortOrder = Cesium.defined(layer.sortOrder) ? layer.sortOrder : 9999
        viewer.imageryLayers._layers.sort((a, b) => a.sortOrder - b.sortOrder)
        viewer.imageryLayers._update()
      }
    },
    localeDateTimeFormatter (date, viewModel, ignoredate) {
      const { JulianDate } = Cesium
      let TZCode
      if (this.UTCoffset) {
        date = JulianDate.addMinutes(date, this.UTCoffset, new JulianDate())
        const offset = new Date().getTimezoneOffset() - this.UTCOffset
        TZCode = offset === 0 ? 'UTC' : 'UTC' + '+' + -(offset / 60)
      } else {
        TZCode = new Date().getTimezoneOffset() === 0 ? 'UTC' : 'UTC' + '+' + -(new Date().getTimezoneOffset() / 60)
      }
      const jsDate = JulianDate.toDate(date)
      const timeString = jsDate
        .toLocaleString(this.$vc.lang.isoName, {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false
        })
        .replace(/,/g, '')
      const dateString = jsDate
        .toLocaleString(this.$vc.lang.isoName, {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
        .replace(/,/g, '')

      if (!ignoredate && (viewModel || jsDate.getHours() + jsDate.getMinutes() === 0)) {
        return dateString
      }

      this.TZCode && (TZCode = this.TZCode)

      return ignoredate ? `${timeString} ${TZCode}` : `${dateString} ${timeString} ${TZCode}`
    },
    localeTimeFormatter (time, viewModel) {
      return this.localeDateTimeFormatter(time, viewModel, true)
    },
    registerEvents (flag) {
      const { viewer } = this
      bindEvents.call(this, viewer, undefined, flag)
      const that = this
      Events['viewer-property-events'].forEach((eventName) => {
        const instance =
          isArray(eventName.name) && viewer[eventName.name[0]]
            ? viewer[eventName.name[0]][eventName.name[1]]
            : viewer[eventName.name]
        instance && bindEvents.call(that, instance, eventName.events, flag)
      })
      const handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
      Events['viewer-mouse-events'].forEach((eventName) => {
        const listener = that.$listeners[eventName] || that.$listeners[eventName.toLowerCase()]
        if (flag) {
          listener && handler.setInputAction(listener.fns, Cesium.ScreenSpaceEventType[eventName])
        } else {
          listener && handler.removeInputAction(Cesium.ScreenSpaceEventType[eventName])
        }
      })
    },
    getServices () {
      const vm = this
      return mergeDescriptors(
        {},
        {
          get viewerContainer () {
            return vm
          },
          get Cesium () {
            return vm.Cesium
          },
          get viewer () {
            return vm.viewer
          },
          get dataSources () {
            return vm.dataSources
          },
          get entities () {
            return vm.entities
          },
          get imageryLayers () {
            return vm.imageryLayers
          },
          get primitives () {
            return vm.primitives
          },
          get groundPrimitives () {
            return vm.groundPrimitives
          },
          get postProcessStages () {
            return vm.postProcessStages
          }
        }
      )
    },
    async getCesiumScript () {
      if (!globalThis.Cesium) {
        let cesiumPath = this.cesiumPath
          ? this.cesiumPath
          : typeof this._Cesium !== 'undefined' && Object.prototype.hasOwnProperty.call(this._Cesium(), 'cesiumPath')
            ? this._Cesium().cesiumPath
            : 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js'

        const dirName = dirname(cesiumPath)
        if (!cesiumPath?.includes('.js')) {
          // 认为是mars3d
          if (cesiumPath?.lastIndexOf('/') !== cesiumPath.length - 1) {
            cesiumPath += '/'
          }
          const libsConfig = getMars3dConfig(cesiumPath)
          const include = this.$vc.cfg?.include || 'mars3d'
          const arrInclude = include.split(',')
          const keys = {}
          for (let i = 0, len = arrInclude.length; i < len; i++) {
            const key = arrInclude[i]
            if (keys[key]) {
              // 规避重复引入lib
              continue
            }
            keys[key] = true
            loadLibs.push(...libsConfig[key])
          }
        } else if (cesiumPath.includes('dc.base')) {
          loadLibs.push(cesiumPath)
          loadLibs.push(cesiumPath.replace('dc.base', 'dc.core'))
          loadLibs.push(cesiumPath.replace('dc.base', 'dc.core').replace('.js', '.css'))
        } else if (cesiumPath.includes('/XbsjEarth.js')) {
          loadLibs.push(cesiumPath)
        } else {
          loadLibs.push(cesiumPath)
          loadLibs.push(`${dirName}/Widgets/widgets.css`)
        }

        const secondaryLibs = loadLibs
        if (!cesiumPath?.includes('.js')) {
          // mars3d 必须要等 Cesium 先初始化
          const primaryLib = loadLibs.find((v) => v.includes('Cesium.js'))
          await loadScript(primaryLib)
          secondaryLibs.splice(secondaryLibs.indexOf(primaryLib), 1)
        }

        const scriptLoadPromises = []
        secondaryLibs.forEach((url) => {
          // eslint-disable-next-line prefer-regex-literals
          const cssExpr = new RegExp('\\.css')
          if (cssExpr.test(url)) {
            scriptLoadPromises.push(loadLink(url))
          } else {
            scriptLoadPromises.push(loadScript(url))
          }
        })

        return Promise.all(scriptLoadPromises).then(() => {
          if (globalThis.Cesium) {
            const listener = this.$listeners.cesiumReady
            listener && this.$emit('cesiumReady', globalThis.Cesium)
            return globalThis.Cesium
          } else if (globalThis.XE) {
            // 兼容 cesiumlab earthsdk
            return globalThis.XE.ready().then(() => {
              // resolve(globalThis.Cesium)
              const listener = this.$listeners.cesiumReady
              listener && this.$emit('cesiumReady', globalThis.Cesium)
              return globalThis.Cesium
            })
          } else if (globalThis.DC) {
            // 兼容  dc-sdk
            globalThis.DC.use(globalThis.DcCore.default)
            globalThis.DC.baseUrl = `${dirName}/resources/`
            globalThis.DC.ready(() => {
              globalThis.Cesium = globalThis.DC.Namespace.Cesium

              const listener = this.$listeners.cesiumReady
              listener && this.$emit('cesiumReady', globalThis.DC)
              return globalThis.Cesium
            })
            return globalThis.Cesium
          } else {
            this._reject(new Error('VueCesium ERROR: ' + 'Error loading CesiumJS!'))
          }
        })
      } else {
        return Promise.resolve(globalThis.Cesium)
      }
    },
    async beforeInit () {
      // Make sure to add only one CesiumJS script tag
      // 保证只添加一个CesiumJS标签
      this.$vc.scriptPromise = this.$vc.scriptPromise || this.getCesiumScript()
      await this.$vc.scriptPromise
    },
    async beforeLoad () {
      const listener = this.$listeners.beforeLoad
      listener && this.$emit('beforeLoad', this)
      // Make sure to add only one CesiumJS script tag
      // 保证只添加一个CesiumJS标签
      this.$vc.scriptPromise = this.$vc.scriptPromise || this.getCesiumScript()
      await this.$vc.scriptPromise
    },
    async load () {
      if (this._mounted) {
        return false
      }
      await this.beforeLoad()
      return this.init()
    },
    async reload () {
      return this.unload().then(() => {
        return this.load()
      })
    },
    async unload () {
      if (!this._mounted) {
        return false
      }

      let unloadingResolve
      this.$vc.viewerUnloadingPromise = new Promise((resolve, reject) => {
        unloadingResolve = resolve
      })

      // If the component has subcomponents, you need to remove the subcomponents first. 如果该组件带有子组件，需要先移除子组件。
      for (let i = 0; i < this.children.length; i++) {
        const vcChildCmp = this.children[i]
        await vcChildCmp.unload()
      }

      const { viewer, earth, map, dcViewer, removeCesiumScript, registerEvents } = this

      if (globalThis.Cesium) {
        viewer.imageryLayers.layerAdded.removeEventListener(this.layerAdded)
        registerEvents(false)
      }

      this.$vc._screenSpaceEventHandler && this.$vc._screenSpaceEventHandler.destroy()
      this.$vc._screenSpaceEventHandler = undefined

      if (globalThis.XE) {
        earth && earth.destroy()
      } else if (globalThis.mars3d) {
        map && map.destroy()
      } else if (globalThis.DC) {
        dcViewer && dcViewer.destroy()
      } else {
        viewer && viewer.destroy()
      }

      this.viewer = undefined
      this._mounted = false

      if (removeCesiumScript && globalThis.Cesium) {
        const scripts = document.getElementsByTagName('script')
        const removeScripts = []
        for (const script of scripts) {
          script.src.indexOf('/Cesium.js') > -1 && removeScripts.push(script)
          script.src.indexOf('/Workers/zlib.min.js') > -1 && removeScripts.push(script)
          if (globalThis.XE) {
            script.src.indexOf('/rxjs.umd.min.js') > -1 && removeScripts.push(script)
            script.src.indexOf('/XbsjCesium.js') > -1 && removeScripts.push(script)
            script.src.indexOf('/viewerCesiumNavigationMixin.js') > -1 && removeScripts.push(script)
            script.src.indexOf('/XbsjEarth.js') > -1 && removeScripts.push(script)
          }

          loadLibs.includes(script.src) && !removeScripts.includes(script) && removeScripts.push(script)
        }

        const links = document.getElementsByTagName('link')
        for (const link of links) {
          link.href.includes('Widgets/widgets.css') && !removeScripts.includes(link) && removeScripts.push(link)
          loadLibs.includes(link.href) && !removeScripts.includes(link) && removeScripts.push(link)
        }
        removeScripts.forEach((script) => {
          script.parentNode && script.parentNode.removeChild(script)
        })
        globalThis.Cesium && (globalThis.Cesium = undefined)
        globalThis.XbsjCesium && (globalThis.XbsjCesium = undefined)
        globalThis.XbsjEarth && (globalThis.XbsjEarth = undefined)
        globalThis.XE && (globalThis.XE = undefined)
        globalThis.mars3d && (globalThis.mars3d = undefined)
        globalThis.DC && (globalThis.DC = undefined)
        globalThis.DcCore && (globalThis.DcCore = undefined)
        this.$vc.scriptPromise = undefined
        loadLibs = []
      }

      const listener = this.$listeners.destroyed
      listener && this.$emit('destroyed', this)
      unloadingResolve(true)
      this.$vc.viewerUnloadingPromise = undefined
      return true
    }
  },
  async mounted () {
    try {
      await this.$vc.viewerUnloadingPromise
      this._resolve(this.load())
    } catch (e) {
      this._reject(e)
    }
  },
  created () {
    this.children = []
    this._mounted = false
    // this._createPromise = Promise.resolve(this.beforeInit())
    // 注释上面方法，测试发现在切换路由时，实测 Vue 生命周期是先触发新组件的 created，再触发旧组件的 destroyed，再触发新组件的 mounted 。
    // 逻辑就是先创建新的 然后销毁旧的，但虽然销毁的是旧的 还是会把新的给影响。
    // 因此 viewer 组件的加载方式还是放 mounted，这样就先销毁旧的再加载新的。
    // 但为了外部能取得 createPromise，_createPromise的初始化还是要放created中。
    const that = this
    this._createPromise = new Promise((resolve, reject) => {
      that._resolve = resolve
      that._reject = reject
    })

    Object.defineProperties(this, {
      createPromise: {
        enumerable: true,
        get: () => this._createPromise
      },
      cesiumObject: {
        enumerable: true,
        get: () => this.viewer
      },
      dataSources: {
        enumerable: true,
        get: () => this.viewer && this.viewer.dataSources
      },
      entities: {
        enumerable: true,
        get: () => this.viewer && this.viewer.entities
      },
      imageryLayers: {
        enumerable: true,
        get: () => this.viewer && this.viewer.imageryLayers
      },
      primitives: {
        enumerable: true,
        get: () => this.viewer && this.viewer.scene.primitives
      },
      groundPrimitives: {
        enumerable: true,
        get: () => this.viewer && this.viewer.scene.groundPrimitives
      },
      postProcessStages: {
        enumerable: true,
        get: () => this.viewer && this.viewer.scene.postProcessStages
      }
    })
  },
  destroyed () {
    this.unload()
  }
}

const loadScript = (src) => {
  const $script = document.createElement('script')
  $script.async = true
  $script.src = src
  document.body.appendChild($script)
  return new Promise((resolve, reject) => {
    $script.onload = () => {
      resolve(true)
    }
  })
}

const loadLink = (src) => {
  const $link = document.createElement('link')
  $link.rel = 'stylesheet'
  $link.href = src
  document.head.appendChild($link)
  return new Promise((resolve, reject) => {
    $link.onload = () => {
      resolve(true)
    }
  })
}
</script>
