import { useId, forwardRef } from 'react'

import { Alert, Input, Label, Wrapper } from '../styles'

const TextInput = forwardRef(({ label, errorMessage, ...rest }, ref) => {
  const id = useId()
  const hasError = Boolean(errorMessage)

  return (
    <Wrapper>
      {errorMessage && <Alert inputId={id}>{errorMessage}</Alert>}
      <Input
        ref={ref}
        id={id}
        type="text"
        hasError={hasError}
        label={label}
        {...rest}
      />
      <Label inputId={id}>{label}</Label>
    </Wrapper>
  )
})

TextInput.displayName = 'TextInput'
export default TextInput
