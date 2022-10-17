import styled from 'styled-components'
import { Text } from 'components/styled'
import { Input } from '../styles'

export const NativeSelect = styled(Input).attrs({
  as: 'select',
})`
  &:focus-visible {
    & ~ .customSelect {
      display: none;
    }
  }
`

export const CustomSelect = styled(NativeSelect).attrs(({ isActive }) => ({
  ...(!isActive && {
    'aria-hidden': 'true',
  }),
  className: 'customSelect',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  pl: '0.3rem',
  pb: '0.4rem',
  as: 'div',
  borderBottom: isActive ? 'primary.default' : 'gray.light',
}))`
  background-color: ${({ theme }) => theme.colors.white};
`

export const CustomOption = styled(Text).attrs(({ dataValue, isSelected }) => ({
  as: 'li',
  'data-value': dataValue,
  color: isSelected ? 'primary.default' : 'black',
  p: '0.6em 1em',
}))`
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gray.xlight};
  }
`

// https://css-tricks.com/striking-a-balance-between-native-and-custom-select-elements/
