import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import { TColorData, TTokens } from 'types'
import { rootPath, store } from 'store/store'

const sanitizeName = (name: string | number) => {
  return `${name}`.toLowerCase().split(' ').join('-')
}
const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>

const generateStorageFile = async ({ colorData, typography }: TTokens) => {
  store.set('tokens', { colorData, typography })
}

const generateCssFile = async ({ colorData, typography }: TTokens) => {
  let scssContent = ``
  let cssContent = `:root {\n`

  colorData.forEach((color) => {
    if (color.baseColor) {
      scssContent += `$color-${sanitizeName(color.name)}: ${color.baseColor};\n`
      cssContent += `  --color-${sanitizeName(color.name)}: ${
        color.baseColor
      };\n`
    }

    getKeys(color.variants).forEach((key) => {
      if (color.variants[key]) {
        scssContent += `$color-${sanitizeName(color.name)}-${sanitizeName(
          key
        )}: ${color.variants[key]};\n`
        cssContent += `  --color-${sanitizeName(color.name)}-${sanitizeName(
          key
        )}: ${color.variants[key]};\n`
      }
    })
  })

  typography.fontSizes.forEach((fontSize) => {
    scssContent += `$font-size-${sanitizeName(fontSize.name)}: ${
      fontSize.value
    }${fontSize.unit};\n`
    cssContent += `  --font-size-${sanitizeName(fontSize.name)}: ${
      fontSize.value
    }${fontSize.unit};\n`
  })

  cssContent += `}\n`
  scssContent += `\n${cssContent}`

  await fs.writeFileSync(`${rootPath}/theme.css`, cssContent)
  await fs.writeFileSync(`${rootPath}/theme.scss`, scssContent)
}

const generateJsonFile = async ({ colorData, typography }: TTokens) => {
  let tsContent = `export const Tokens = `
  let cjsContent = `exports.Tokens = `
  let jsContent = `export const Tokens = `
  let jsonContent = ''

  const themeObj = new Map<
    string,
    { [key: string]: string | { [key: string]: string } }
  >()

  const colorObj = new Map<string, { [key: string]: string }>()
  const fontSizeObj = new Map<string, string>()

  colorData.forEach((color) => {
    colorObj.set(sanitizeName(color.name), {
      ...(color.baseColor && { base: color.baseColor }),
      ...color.variants,
    })
  })

  typography.fontSizes.forEach((color) => {
    fontSizeObj.set(sanitizeName(color.name), `${color.value}${color.unit}`)
  })

  themeObj.set('colors', Object.fromEntries(colorObj))
  themeObj.set('fontSizes', Object.fromEntries(fontSizeObj))

  const rawJsonObject = Object.fromEntries(themeObj)

  tsContent += JSON.stringify(rawJsonObject, null, 2)
  jsContent += JSON.stringify(rawJsonObject, null, 2)
  cjsContent += JSON.stringify(rawJsonObject, null, 2)
  jsonContent += JSON.stringify(rawJsonObject, null, 2)

  await fs.writeFileSync(`${roo