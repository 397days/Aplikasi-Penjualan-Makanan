import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import { Color, ColorResult, SketchPicker } from '@hello-pangea/color-picker'
import { generateDefaultColorShades } from 'components/ColorPalette/utils'
import { useState } from 'react'
import tinycolor from 'tinycolor2'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { NUMBER_OF_STEPS_IN_NEW_FLOW } from '../constants'

export function PickPrimary({
  initialPrimary,
  onUpdatePage,
  onUpdatePrimaryColor,
}: {
  initialPrimary: string
  onUpdatePage: (page: number) => void
  onUpdatePrimaryColor: (newColor: string) => void
}) {
  const [primaryColor, setPrimaryColor] = useState<string>(initialPrimary)

  const shades = generateDefaultColorShades(primaryColor)

  return (
    <Box css={{ display: 'flex', height: '100%' }}>
      <Box
        css={{
          width: '50%',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: