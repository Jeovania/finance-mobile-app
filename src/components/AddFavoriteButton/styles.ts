import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { space, border, color, flexbox } from 'styled-system'

export const StyledButton = styled(TouchableOpacity)`
  ${space}
  ${border}
  ${color}
  ${flexbox}
  width: 58px;
  height: 58px;
  border-radius: 58px;
`
