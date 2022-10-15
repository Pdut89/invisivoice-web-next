import styled from 'styled-components'
import css from '@styled-system/css'
import { typography, system } from 'styled-system'

import Box from './box'

// const VARIANTS = ({ hasError, color, fontSize, fontWeight, lineHeight }) =>
//   variant({
//     variants: {
//       default: {
//         fontSize: fontSize || 'medium',
//         fontWeight: fontWeight || 'medium',
//         lineHeight: lineHeight || 'normal',
//         color: color || 'grayscale.default',
//       },
//       pageHeading: {
//         fontWeight: 'medium',
//         letterSpacing: '-0.02rem',
//         '& span': {
//           color: color || 'primary',
//           ml: 'small',
//         },
//       },
//       sectionHeading: {
//         fontSize: fontSize || ['2rem', '4rem'],
//         color: color || 'black',
//         fontWeight: 'extrabold',
//         lineHeight: lineHeight || '1.1em',
//       },
//       sectionDescription: {
//         fontSize: ['small', 'large'],
//         color: color || 'black',
//         lineHeight: '1.6em',
//       },
//       subTitle: {
//         fontSize: '1.25rem',
//         fontWeight: 'bold',
//         color: color || 'grayscale.default',
//       },
//       cardTitle: {
//         fontSize: ['xlarge', 'xxlarge'],
//         fontWeight: 'light',
//         color: color || 'grayscale.default',
//       },
//       tileHeader: {
//         color: color || 'black',
//         fontWeight: 'extrabold',
//         fontSize: 'large',
//       },
//       inputLabel: {
//         fontSize: fontSize || 'xsmall',
//         fontWeight: 'bold',
//         lineHeight: 'normal',
//         color: hasError ? 'red.2' : 'grayscale.default',
//         opacity: hasError ? 1 : 0.9,
//       },
//       alert: {
//         fontSize: 'xxsmall',
//         color: color || 'red.2',
//       },
//       confirmation: {
//         fontSize: 'xxlarge',
//         fontWeight: 'bold',
//         color: color || 'primary',
//       },
//       ghost: {
//         fontWeight: 'extrabold',
//         opacity: '0.03',
//         color: 'grayscale.dark',
//         pointerEvents: 'none',
//       },
//       link: {
//         color: 'white',
//         opacity: 0.6,
//         textDecoration: 'none',
//         cursor: 'pointer',
//         fontSize: 'small',
//         lineHeight: 'loose',
//         '&:hover': {
//           color: 'white',
//           opacity: 1,
//         },
//       },
//     },
//   })

const Text = styled(Box).attrs(({ variant, as = 'span', ...rest }) => ({
  as,
  ...rest,
}))(
  system({
    textDecoration: true,
    whiteSpace: true,
  }),
  // VARIANTS,
  typography,
  ({ lineClamp, whiteSpace }) =>
    css({
      ...(lineClamp && {
        display: '-webkit-box',
        '-webkit-line-clamp': lineClamp,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
      }),
    })
)

export default Text
