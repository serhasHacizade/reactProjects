import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';
import React from 'react'

const Error404 = () => {
  return (
    <div>
        <Alert status="error">
            <AlertIcon />
            <AlertTitle mr="2">Error404</AlertTitle>
            <AlertDescription>This page is not found</AlertDescription>
        </Alert>
    </div>
  )
}

export default Error404;