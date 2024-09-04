'use client';

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme";

export function ProviderChakra({children}:{children:React.ReactNode}){

    return(
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}