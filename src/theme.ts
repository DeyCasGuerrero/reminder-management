import { background, border, textDecoration } from "@chakra-ui/react";
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,

};


const theme = extendTheme(config,
    {
        colors: {
            brand: {
                50: '#e3f2f9',
                100: '#c5e4f3',
                200: '#a2d4ec',
                300: '#7ac1e4',
                400: '#47a9da',
                500: '#0088cc', // Color principal
                600: '#007ab8',
                700: '#006ba1',
                800: '#005885',
                900: '#003f5e',
            },
        },
        fonts: {
            heading: "'Roboto', sans-serif",
            body: "'Open Sans', sans-serif",
        },
        components: {
            Button: {
                baseStyle: {
                    fontWeight: 'bold',
                },
                sizes: {
                    xl: {
                        h: '56px',
                        fontSize: 'lg',
                        px: '32px',
                    },
                },
                // variants: {
                //     solid: (props: any) => ({
                //         color: 'white',
                //     }),
                //     outline: {
                //         borderColor: 'brand.500',
                //         color: 'brand.500',
                //     },
                // },
            },
            Link: {
                baseStyle: {
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: 'md',
                    padding: '2',
                    _hover: {
                        textDecoration: 'none',
                        bg: 'gray.800',
                    },
                },
            },
        },
        styles: {
            global: {
                body: {
                    bg: 'black',
                    color: 'white',
                },
                a: {
                    color: 'gray.600',
                    _hover: {
                        // textDecoration: 'underline',
                    },
                },
            },
        },
    });

export default theme;