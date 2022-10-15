import styled from 'styled-components'
import Box from './box'

const Flex = styled(Box)(({ display = 'flex' }) => ({ display }))

export default Flex
