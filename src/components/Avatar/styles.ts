import { Image } from 'react-native'
import styled from 'styled-components/native'
import { space, border } from 'styled-system'

export const StyledAvatar = styled(Image)<{ size: number }>`
  ${space}
  ${border}
  width: ${(props): number => props.size}px;
  height: ${(props): number => props.size}px;
  border-radius: ${(props): number => props.size}px;
`
