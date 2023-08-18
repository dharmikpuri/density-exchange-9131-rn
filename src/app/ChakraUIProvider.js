"use client"

import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

export function ChakraUIProvider({ children }) {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}