const baseValueToRem = (multiplicator) => {
  return `${multiplicator / 16}rem`
}

const defaultValues = {
  color: {
    primary: '',
    secondary: '',
    tertiary: '',
    default: '',
    grey: '',
    dark: '',
    background: ''
  },

  backgroundColor: {
    primary: '',
    secondary: '',
    tertiary: '',
    default: '',
    grey: '',
    dark: ''
  }
}

const theme = {
  baseValueToRem,
  ...defaultValues
}

export default theme
