import { color, extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto";

export const theme = extendTheme({
  colors: {
    brand: {
      "unselected" : "rgba(0,0,0,0.15)",
      "dark-low" : "rgba(0,0,0,0.44)",
      "dark-medium" : "rgba(0,0,0,0.60)",
      "dark-high" : "rgba(0,0,0,0.80)",
      "accent" : "#E63888",
      "light-solid" : "#FFF",
      "light-high" : "rgba(255,255,255,0.80)",
    },
  },
  fonts: {
    body: "Roboto",
    mono: "Roboto",
    heading: "Roboto"
  },
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  textStyles: {
    display: {
      fontSize: ['40px', '48px'],
      fontWeight: 'bold',
      lineHeight: ['44px', '52px'],
      letterSpacing: '-1,2%',
    },
    headingL: {
      fontSize: ['32px', '40px'],
      fontWeight: 'bold',
      lineHeight: ['36x', '44px'],
      letterSpacing: '-1%',
    },
    headingM: {
      fontSize: ['24px', '32px'],
      fontWeight: 'bold',
      lineHeight: ['28x', '36px'],
      letterSpacing: '-0,8%',
    },
    headingS: {
      fontSize: ['20px', '24px'],
      fontWeight: 'bold',
      lineHeight: ['24px', '28px'],
      letterSpacing: '-0,6%',
    },
    headingXS: {
      fontSize: ['18px', '20px'],
      fontWeight: 'bold',
      lineHeight: ['22px', '24px'],
    },
    subHeading: {
      fontSize: "16px",
      fontWeight: 'bold',
      lineHeight: "20px",
    },
    bodyM: {
      fontSize: "16px",
      fontWeight: 'regular',
      lineHeight: "24px",
    },
},
});