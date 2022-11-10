import styled from 'styled-components'
import css from '@styled-system/css'
import { typography, system } from 'styled-system'

import Box from './box'

const Text = styled(Box).attrs(({ variant, as = 'span', ...rest }) => ({
  as,
  ...rest,
}))(
  system({
    textDecoration: true,
    whiteSpace: true,
  })
)

export default Text
