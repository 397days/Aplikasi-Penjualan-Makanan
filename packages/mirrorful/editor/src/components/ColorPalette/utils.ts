import tinycolor from 'tinycolor2'
import { VALID_CSS_COLORS } from './validCssColors'

export const newShade = (hexColor: string, magnitude: number) => {
  hexColor = hexColor.replace(`#`, ``)
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16)
    let r = (decimalColor >> 16) + magnitude
    r > 255 && (r = 255)
    r < 0 && (r = 0)
    let g = (decimalColor & 0x0000ff) + magnitude
    g > 255 && (g = 255)
    g < 0 && (g = 0)
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude
    b > 255 && (b = 255)
    b < 0 && (b = 0)
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`
  } else {
    return hexColor
  }
}

const scaleDiff = 6

export const generateDefaultColorShades = (primary: string) => {
  const tc = tinycolor(primary)

  return {
    50: tinycolor(primary)
      .lighten(scaleDiff * 5)
      .toHexString(),
    100: tinycol