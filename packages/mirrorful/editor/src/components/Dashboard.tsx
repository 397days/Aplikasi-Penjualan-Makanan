import { useDisclosure, Box, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { TColorData, TTypographyData } from 'types'
import { ColorPaletteSection } from './ColorPalette/ColorPaletteSection'
import { ExportSuccessModal } from './ExportSuccessModal'
import { Onboarding } from './Onboarding'
import posthog from 'posthog-js'
import { TypographySection } from './Typography/TypographySection'

export function Dashboard() {
  const [shouldForceSkipOnboarding, setShouldForceSkipOnboarding] =
    useState<boolean>(false)

  const [showOnboarding, setShowOnboarding] = useState<boolean>(false)
  const [colors, setColors] = useState<TColorData[]