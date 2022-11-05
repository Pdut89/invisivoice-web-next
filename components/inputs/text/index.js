import { useId } from 'react'

import { Alert, Input, Label, Wrapper } from '../styles'

const TextInput = ({
  label,
  name,
  placeholder,
  errorMessage,
  hasError = !!errorMessage,
  ...rest
}) => {
  const id = useId()
  return (
    <Wrapper>
      {errorMessage && <Alert inputId={id}>{errorMessage}</Alert>}
      <Input
        id={id}
        type="text"
        name={name}
        placeholder={placeholder}
        hasError={hasError}
        label={label}
        {...rest}
      />
      <Label inputId={id} hasError={hasError}>
        {label}
      </Label>
    </Wrapper>
  )
}

export default TextInput
