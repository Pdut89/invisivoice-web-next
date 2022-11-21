import styled from 'styled-components'
import {
  color,
  layout,
  position,
  space,
  shadow,
  border,
  background,
  typography,
  flexbox,
  system,
} from 'styled-system'

const Box = styled.div(
  color,
  layout,
  position,
  space,
  shadow,
  border,
  background,
  typography,
  flexbox,
  system({
    transform: true,
  })
)

export default Box
