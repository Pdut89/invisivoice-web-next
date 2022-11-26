import { useId, forwardRef } from 'react'

import { Alert, Input, Label, Wrapper } from '../styles'

const TextInput = forwardRef(
  (
    {
      label,
      name,
      placeholder,
      errorMessage,
      hasError = !!errorMessage,
      ...rest
    },
    ref
  ) => {
    const id = useId()
    return (
      <Wrapper>
        {errorMessage && <Alert inputId={id}>{errorMessage}</Alert>}
        <Input
          ref={ref}
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
)

TextInput.displayName = 'TextInput'
export default TextInput
