import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { space, border, color, flexbox } from 'styled-system'

export const StyledButton = styled(TouchableOpacity)`
  ${space}
  ${border}
  ${color}
  ${flexbox}
  width: 53px;
  height: 53px;
  border-radius: 53px;
`
