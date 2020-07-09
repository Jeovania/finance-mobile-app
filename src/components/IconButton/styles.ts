import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { space, color, border } from 'styled-system'

export const StyledButton = styled(TouchableOpacity)`
  ${space}
  ${color}
  ${border}
  width: 75px;
  height: 75px;
  alignItems: center;
  border-radius: 18px;
  justifyContent: center;
`
