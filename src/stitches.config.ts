import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    // Palette from https://coolors.co/palettes/trending
    colors: {
      black: '11, 9, 10',
      darkGray: '22, 26, 29',
      gray: '211, 211, 211',
      lightGray: '245, 243, 244',
      darkRed: '102, 7, 8',
      red: '164, 22, 26',
      lightRed: '186, 24, 27',
      silver: '177, 167, 166',
      white: '255, 255, 255'
    }
  },
  media: {
    bpi: '(min-width: 400px)'
  },
  utils: {
    marginX: (value: string) => ({ marginLeft: value, marginRight: value })
  }
});
