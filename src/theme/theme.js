import { createMuiTheme } from '@material-ui/core/styles'

import typography from './typography'

export default function createMyTheme() {
  return createMuiTheme({
    palette: {
      primary: {
        light: '#820AD1',
        main: '#C4C4C4'
      },
      background: {
        paper: '#F5F5F5',
        default: '#FFF'
      },
      text: {
        primary: '#820AD1',
        secondary: '#BC63F8',
        hint: '#000000',
        disabled: '#A3A3A3'
      }
    },
    spacing: 4,
    typography
  })
}
