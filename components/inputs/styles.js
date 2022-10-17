import styled from 'styled-components'

import { Flex, Text } from 'components/styled'

export const Wrapper = styled(Flex).attrs((props) => ({
  position: 'relative',
  width: '100%',
  flexDirection: 'column-reverse',
  alignSelf: 'flex-start',
  mb: '1.5rem',
  ...props,
}))``

export const Label = styled(Text).attrs(
  ({ inputHasError, inputId, as, isActive, ...rest }) => ({
    as: 'label',
    htmlFor: inputId,
    fontSize: 'small',
    fontWeight: 'semi',
    color: isActive ? 'primary.default' : 'gray.default',
    ...rest,
  })
)``

export const Alert = styled(Text).attrs(({ inputId }) => ({
  id: inputId + '-error',
  fontSize: 'xsmall',
  fontWeight: 'medium',
  color: 'red.0',
  mt: '0.3em',
  position: 'absolute',
  bottom: '0',
  left: '0',
  lineHeight: '1.5em',
  transform: 'translateY(100%)',
}))``

export const Input = styled(Text).attrs(({ hasError, label, id }) => ({
  as: 'input',
  id,
  fontSize: 'medium',
  border: 'none',
  borderBottom: 'gray.light',
  background: 'transparent',
  mt: '0.3rem',
  py: '0.3rem',
  ...(label && {
    'aria-labelledby': label,
  }),

  ...(hasError && {
    'aria-invalid': 'true',
    'aria-describedby': id + '-error',
  }),
}))`
  outline: none;
  cursor: pointer;
  &:focus-visible {
    border-bottom: ${({ theme }) => theme.borders.primary.default};
  }
  &:focus-visible + label {
    color: ${({ theme }) => theme.colors.primary.default};
  }
`
