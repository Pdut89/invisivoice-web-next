import styled, { css } from 'styled-components'
import { Input } from '../styles'

const VARIANTS = {
  checkbox: {
    default: {
      label: css`
        &::before {
          width: 1.1rem;
          height: 1.1rem;
          background-color: white;
          border: ${({ theme }) => theme.borders.gray.default};
          margin-right: 0.4rem;
          border-radius: ${({ theme }) => theme.radii.xxsmall};
        }
        &::after {
          top: 0.3rem;
          left: 0.25rem;
          color: ${({ theme }) => theme.colors.white};
          height: 0.35rem;
          width: 0.65rem;
          border-left: ${({ theme }) => theme.borders.white};
          border-bottom: ${({ theme }) => theme.borders.white};
          transform: rotate(-45deg);
        }
      `,
    },
  },
  radio: {
    default: {
      label: css`
        &::before {
          width: 1.1rem;
          height: 1.1rem;
          background-color: white;
          border: ${({ theme }) => theme.borders.gray.default};
          margin-right: 0.4rem;
          border-radius: ${({ theme }) => theme.radii.full};
        }
        &::after {
          width: 1.1rem;
          height: 1.1rem;
          top: 0;
          left: 0;
          color: ${({ theme }) => theme.colors.white};
          border-radius: ${({ theme }) => theme.radii.full};
          background-color: ${({ theme }) => theme.colors.primary.light};
          border: ${({ theme }) => theme.borders.primary.dark};
          background-image: ${({ theme }) => theme.gradients.radio};
        }
      `,
    },
  },
}

export const Label = styled.label.attrs(({ inputId }) => ({
  id: inputId + 'label',
  htmlFor: inputId,
}))`
  margin-top: 0.2rem;
  align-items: center;
  position: relative;
  line-height: 1.4;
  padding-left: 2rem;
  user-select: none;
  cursor: pointer;

  /* checkbox background */
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
  }
  /* checkmark */
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
  }

  ${({ variant, type }) => VARIANTS[type][variant]?.label};
`

export const StyledInput = styled(Input).attrs(({ alertId, id, hasError }) => ({
  ...(id && {
    'aria-labelledby': id + '-label',
  }),
  ...(hasError && {
    'aria-invalid': 'true',
    'aria-describedby': alertId + '-error',
  }),
}))`
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;

  &:checked + label::before {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    border: ${({ theme }) => theme.borders.primary.dark};
  }

  & + label::after {
    content: none;
  }

  &:checked + label::after {
    content: '';
  }

  &:hover + label::before,
  &:focus-visible + label::before {
    border: ${({ theme }) => theme.borders.primary.light};
  }
`

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  margin: 0;
  padding: 0;
`

export const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`
