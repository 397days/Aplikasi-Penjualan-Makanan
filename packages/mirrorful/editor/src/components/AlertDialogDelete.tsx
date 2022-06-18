import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
import React from 'react'

export function AlertDialogDelete({
  tokenName,
  isOpen,
  onClose,
  onDelete,
}: {
  tokenName: string
  isOpen: boolean
  onClose: () => void
  onDelete: () => void
}) {
  const cancelRef = React.useRef(null)

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverla