import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#1D1D1D',     // background
      '600': '#47585B',     // Dark - Headings and Text
      '500': '#999999',     // Dark - Info
      '400': '#99999980',   // Dark - Info 50%
      '300': '#DADADA',     // Light - Info
      '50': '#F5F8FA',      // Light - Headings and Text
    },
    yellow: {
      '500': '#FFBA08',     // Highlight
      '400': '#FFBA0880',   // Highlight 50%
    }
  },

  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600',
      }
    }
  }
})