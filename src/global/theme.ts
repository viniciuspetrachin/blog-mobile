import { Platform } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const sizeHeight = (value: number) =>
  Platform.OS === 'ios' ? RFValue(value) : RFValue(value + 10)

export const sizeFont = (value: number) =>
  Platform.OS === 'ios' ? RFValue(value) : RFValue(value + 3)

const theme = {
  colors: {
    primary: '#1E2630',
    background: "#FFFFFF"
  },
  fonts: {
    regular: 'Inter_400Regular',
    bold: 'Inter_700Bold',
  },
  size: {
    font: {
      xs: sizeFont(10),
      sm: sizeFont(12),
      md: sizeFont(14),
      lg: sizeFont(16),
    },
    xs: sizeHeight(8),
    sm: sizeHeight(10),
    md: sizeHeight(16),
    lg: sizeHeight(20),
    xl: sizeHeight(24),
  },
}
export default theme