import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-self: flex-start;
  position: relative;
  margin-bottom: 1.5em;
  width: 100%;

  /* For legend / fieldset */
  /* ${({ hasError, theme: { colors } }) => css`
    &:hover {
      > label,
      legend {
        color: ${hasError ? colors.red : colors.primary.default};
      }
    }
  `}; */
`

export const Label = styled.label.attrs(({ inputId }) => ({
  id: inputId + '-label',
  htmlFor: inputId,
}))`
  padding-bottom: 0.3em;
  font-weight: ${({ theme }) => theme.fontWeights.semi};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary.default};
`

export const Alert = styled.span.attrs(({ inputId }) => ({
  id: inputId + '-error',
}))`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.red};
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1.5em;
  transform: translateY(100%);
`

export const Input = styled.input.attrs(({ hasError, label, id, ...rest }) => ({
  as: 'input',
  id,
  ...(label && {
    'aria-labelledby': id + '-label',
  }),
  ...(hasError && {
    'aria-invalid': 'true',
    'aria-describedby': id + '-error',
  }),
  ...rest,
}))`
  font-family: inherit;
  width: 100%;
  border: none;
  padding: 0.3rem 0;
  outline: none;
  background-color: ${({ theme }) => theme.colors.transparent};
  border-bottom: ${({ theme }) => theme.borders.gray.light};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray.light};
  }

  &:hover:not(:disabled),
  &:focus-visible:not(:disabled) {
    border-bottom: ${({ theme: { borders }, hasError }) =>
      hasError ? borders.status.error : borders.primary.default};
  }

  & + label {
    ${({ theme: { colors }, hasError }) =>
      hasError &&
      css`
        color: ${colors.red};
      `};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    & + label {
      opacity: 0.5;
    }
  }
`
