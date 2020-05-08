import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { space, color, border } from 'styled-system'

export const StyledButton = styled(TouchableOpacity)`
  ${space}
  ${color}
  ${border}
  width: 56px;
  height: 56px;
  alignItems: center;
  justifyContent: center;
`
