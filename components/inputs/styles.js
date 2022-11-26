import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-self: flex-start;
  position: relative;
  margin-bottom: 1.5em;
  width: 100%;
  &:hover {
    > label,
    legend {
      color: ${({ theme }) => theme.colors.primary.default};
    }
  }
`

export const Label = styled.label.attrs(({ inputId }) => ({
  id: inputId + '-label',
  htmlFor: inputId,
}))`
  font-weight: ${({ theme }) => theme.fontWeights.semi};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme: { colors }, isActive, hasError }) =>
    hasError
      ? colors.red
      : isActive
      ? colors.primary.default
      : colors.gray.default};
`

export const Legend = styled(Label).attrs({
  as: 'legend',
})``

export const Alert = styled.span.attrs(({ inputId }) => ({
  id: inputId + '-error',
}))`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.red};
  margin-top: 0.3em;
  position: absolute;
  bottom: 0;
  left: 0;
  lineheight: 1.5em;
  transform: translateY(100%);
`

export const Input = styled.input.attrs(({ hasError, label, id }) => ({
  as: 'input',
  id,
  ...(label && {
    'aria-labelledby': id + '-label',
  }),
  ...(hasError && {
    'aria-invalid': 'true',
    'aria-describedby': id + '-error',
  }),
}))`
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border-bottom: ${({ theme }) => theme.borders.gray.light};
  background-color: ${({ theme }) => theme.colors.transparent};
  margin-top: 0.3rem;
  padding: 0.3rem 0;
  outline: none;
  cursor: pointer;
  &:hover,
  &:focus-visible {
    border-bottom: ${({ theme }) => theme.borders.primary.default};
  }
  &:hover + label,
  &:focus-visible + label {
    color: ${({ theme }) => theme.colors.primary.default};
  }
`
