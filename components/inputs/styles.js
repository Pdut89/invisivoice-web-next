import styled from 'styled-components'
import css from '@styled-system/css'

import { Flex, Text } from 'components/styled'

export const Wrapper = styled(Flex).attrs((props) => ({
  position: 'relative',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  mb: '1.5rem',
  ...props,
}))``

export const Label = styled(Text).attrs(
  ({ inputHasError, inputId, as, ...rest }) => ({
    as: 'label',
    for: inputId,
    fontSize: 'small',
    fontWeight: 'semi',
    color: 'gray.default',
    ...rest,
  })
)``

export const Alert = styled(Text).attrs(({ inputId }) => ({
  id: inputId + '-error',
  fontSize: 'xsmall',
  fontWeight: 'medium',
  color: 'red.0',
  mt: '0.3em',
}))``

export const Input = styled(Text).attrs(({ hasError, id }) => ({
  as: 'input',
  id,
  fontSize: 'medium',
  border: 'none',
  borderBottom: 'gray.light',
  background: 'transparent',
  mt: '0.3rem',
  py: '0.3rem',
  ...(hasError && {
    'aria-invalid': 'true',
    'aria-describedby': id + '-error',
  }),
}))(
  css({
    outline: 'none',
    cursor: 'pointer',
    '&:focus-visible': {
      borderBottom: 'primary.default',
    },
    '&:focus-visible + label': {
      color: 'primary.default',
    },
  })
)
