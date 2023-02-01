
import { Box, Button, Heading, Input, Stack, Text } from '@chakra-ui/react'
import { Color, ColorResult, SketchPicker } from '@hello-pangea/color-picker'
import { generateDefaultColorShades } from 'components/ColorPalette/utils'
import { useState } from 'react'
import tinycolor from 'tinycolor2'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { NUMBER_OF_STEPS_IN_NEW_FLOW } from '../constants'

export function NamePrimary({
  initialName,
  onUpdatePage,
  primaryColor,
  onUpdatePrimaryName,
}: {
  initialName: string
  onUpdatePage: (page: number) => void
  primaryColor: string
  onUpdatePrimaryName: (newName: string) => void
}) {
  const [error, setError] = useState<string | null>(null)
  const [name, setName] = useState<string>(initialName)

  const shades = generateDefaultColorShades(primaryColor)

  return (
    <Box css={{ display: 'flex', height: '100%' }}>
      <Box
        css={{
          width: '50%',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box css={{ paddingTop: '32px' }}>
          <Stack spacing={1} direction={'row'}>
            <Text color="gray.500" fontWeight="black" fontSize={18}>
              02
            </Text>
            <Text color="gray.500" fontWeight="bold" fontSize={18}>
              of
            </Text>
            <Text color="gray.500" fontWeight="black" fontSize={18}>
              {NUMBER_OF_STEPS_IN_NEW_FLOW}
            </Text>
          </Stack>

          <Heading fontWeight="black" css={{ marginTop: '12px' }} fontSize={36}>
            {`Let's`} give your color <br />a name!
          </Heading>
          <Text
            css={{ marginTop: '32px' }}
            fontSize={20}
            color="gray.500"