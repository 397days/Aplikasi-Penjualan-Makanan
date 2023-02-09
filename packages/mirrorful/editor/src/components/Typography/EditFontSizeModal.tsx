import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormLabel,
  Box,
  Checkbox,
  Select,
  Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { TFontSizeVariant } from 'types'
import { AlertDialogDelete } from 'components/AlertDialogDelete'
import { useDisclosure } from '@chakra-ui/react'

export function EditFontSizeModal({
  isOpen,
  onClose,
  initialFontSizeVariant,
  onUpdateFontSizeVariant,
  onDeleteFontSizeVariant,
}: {
  isOpen: boolean
  onClose: () => void
  initialFontSizeVariant?: TFontSizeVariant
  onUpdateFontSizeVariant: (newVariant: TFontSizeVariant) => void
  onDeleteFontSizeVariant: () => void
}) {
  const {
    isOpen: isAlertDialogOpen,
    onOpen: onDeleteAlertDialogOpen,
    on