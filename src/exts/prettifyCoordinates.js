/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:23:38
 * @LastEditTime: 2022-05-06 10:30:38
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\exts\prettifyCoordinates.js
 */
/**
 * Turns the longitude / latitude in degrees into a human readable pretty strings.
 *
 * @param {Number} longitude The longitude to format.
 * @param {Number} latitude The latitude to format.
 * @param {Object} options Object with the following properties:
 * @param {Number} options.height The height.
 * @param {Number} options.errorBar The error +/- for the height.
 * @param {Number} options.digits The number of digits to fix the lat / lon to.
 */
function prettifyCoordinates (longitude, latitude, options) {
  const result = {}
  const { defaultValue, defined } = Cesium
  const optionsDefaulted = defaultValue(options, {})
  const digits = defaultValue(optionsDefaulted.digits, 5)
  console.log(optionsDefaulted)

  if (optionsDefaulted.rangType === 0) {
    result.latitude = Math.abs(latitude).toFixed(digits) + '°' + (latitude < 0.0 ? 'S' : 'N')
    result.longitude = Math.abs(longitude).toFixed(digits) + '°' + (longitude < 0.0 ? 'W' : 'E')
  } else if (optionsDefaulted.rangType === 1) {
    result.latitude = latitude.toFixed(digits) + '°'
    result.longitude = longitude.toFixed(digits) + '°'
  } else if (optionsDefaulted.rangType === 2) {
    result.latitude = latitude.toFixed(digits) + '°'
    result.longitude = (longitude < 0 ? 360 + longitude : longitude).toFixed(digits) + '°'
  }

  if (defined(optionsDefaulted.height)) {
    result.elevation =
      Math.round(optionsDefaulted.height) +
      (defined(optionsDefaulted.errorBar) ? '±' + Math.round(optionsDefaulted.errorBar) : '') +
      'm'
  } else {
    result.elevation = undefined
  }

  return result
}

export default prettifyCoordinates
