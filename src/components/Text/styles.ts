import { Text } from 'react-native'
import styled, { css } from 'styled-components/native'
import { CSSObject } from 'styled-components'
import { space, color, flexbox } from 'styled-system'

const variants = {
  xxl: css<{ isBold: boolean }>`
    font-size: ${({ theme }): number => theme.fontSizes[5]}px;
  `,
  xl: css<{ isBold: boolean }>`
    font-size: ${({ theme }): number => theme.fontSizes[4]}px;
  `,
  lg: css<{ isBold: boolean }>`
    font-size: ${({ theme }): number => theme.fontSizes[3]}px;
  `,
  md: css<{ isBold: boolean }>`
    font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  `,
  sm: css<{ isBold: boolean }>`
    font-size: ${({ theme }): number => theme.fontSizes[1]}px;
  `,
  xs: css<{ isBold: boolean }>`
    font-size: ${({ theme }): number => theme.fontSizes[0]}px;
  `,
}

export const StyledText = styled(Text)<{
  size: string
  isBold: boolean
  opacity: number
  textAlign: string
}>`
    ${(props): CSSObject => variants[props.size]};
    text-align: ${(props): string => props.textAlign};
    font-family: ${(props): string => (props.isBold ? props.theme.fonts.bold : props.theme.fonts.light)};
    opacity: ${(props): number => props.opacity};
    ${space}
    ${color}
    ${flexbox}
  `
