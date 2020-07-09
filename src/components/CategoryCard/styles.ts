import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { space, color, position, flexbox } from 'styled-system'

export const StyledCard = styled(TouchableOpacity)`
    ${space}
    ${color}
    ${flexbox}
    ${position}
    width: 164px;
    height: 117px;
    border-radius: 18px;
    elevation: 4;
    boxShadow: 0px 3px 6px #d1d1d1;
  `
