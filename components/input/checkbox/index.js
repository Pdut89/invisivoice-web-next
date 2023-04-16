import { useId } from 'react'

import { Alert, Wrapper, Legend } from '../styles'
import { StyledInput, Label, Fieldset, OptionsList, ListItem } from './styles'

const Checkbox = ({
  legend,
  name,
  options,
  errorMessage,
  hasError = !!errorMessage,
  type = 'checkbox',
  variant = 'default',
}) => {
  const id = useId()

  return (
    <Wrapper>
      {errorMessage && <Alert inputId={id}>{errorMessage}</Alert>}

      <Fieldset>
        <Legend as="legend" inputId={id} hasError={hasError} p="0">
          {legend}
        </Legend>

        <OptionsList>
          {options.map(({ value, label }) => {
            const inputId = id + value
            return (
              <ListItem key={inputId}>
                <StyledInput
                  id={inputId}
                  value={value}
                  type={type}
                  name={name}
                  label={label}
                  alertId={id}
                  hasError={hasError}
                />
                <Label inputId={inputId} type={type} variant={variant}>
                  {label}
                </Label>
              </ListItem>
            )
          })}
        </OptionsList>
      </Fieldset>
    </Wrapper>
  )
}

export default Checkbox
