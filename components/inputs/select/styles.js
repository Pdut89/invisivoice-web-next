import styled from 'styled-components'
import { Input } from '../styles'

export const NativeSelect = styled(Input).attrs({
  as: 'select',
})`
  width: 100%;
  &:focus-visible {
    & ~ .customSelect {
      display: none;
    }
  }
`

export const CustomSelect = styled(NativeSelect).attrs(({ isActive }) => ({
  as: 'div',
  ...(!isActive && {
    'aria-hidden': 'true',
  }),
  className: 'customSelect',
}))`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 0 0.4rem 0.3rem;
  border-bottom: ${({ theme, isActive }) =>
    isActive ? theme.borders.primary.default : theme.borders.gray.light};
  background-color: ${({ theme }) => theme.colors.white};
`

export const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.5);
  border-radius: xxsmall;
  background-color: white;
  z-index: 1;
`

export const CustomOption = styled.li.attrs(({ dataValue }) => ({
  as: 'li',
  'data-value': dataValue,
}))`
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary.default : theme.colors.black};
  padding: 0.6em 1em;
  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gray.xlight};
  }
`

// https://css-tricks.com/striking-a-balance-between-native-and-custom-select-elements/
