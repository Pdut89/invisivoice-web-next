import { Flex } from 'components/styled'
import { useId } from 'react'

import { Alert, Wrapper, Legend } from '../styles'
import { StyledInput, Label, Fieldset } from './styles'

const Checkbox = ({
  legend,
  name,
  options,
  errorMessage,
  hasError = !!errorMessage,
}) => {
  const id = useId()
  return (
    <Wrapper>
      {errorMessage && <Alert inputId={id}>{errorMessage}</Alert>}

      <Fieldset>
        <Legend as="legend" inputId={id} hasError={hasError} p="0">
          {legend}
        </Legend>

        <Flex as="ul" flexDirection="column" mt="0.5rem">
          {options.map(({ value, label }) => {
            const inputId = id + value
            return (
              <Flex key={value} as="li" alignItems="center">
                <StyledInput
                  id={inputId}
                  value={value}
                  type="checkbox"
                  name={name}
                  label={label}
                  alertId={id}
                  hasError={hasError}
                />
                <Label inputId={inputId}>{label}</Label>
              </Flex>
            )
          })}
        </Flex>
      </Fieldset>
    </Wrapper>
  )
}

export default Checkbox
