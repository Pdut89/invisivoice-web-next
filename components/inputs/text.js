import { useId } from 'react'

import { Alert, Input, Label, Wrapper } from './styles'

const TextInput = ({ label, name, placeholder, errorMessage, ...rest }) => {
  const id = useId()
  return (
    <Wrapper>
      {errorMessage && <Alert inputId={id}>{errorMessage}</Alert>}
      <Input
        id={id}
        type="text"
        name={name}
        placeholder={placeholder}
        hasError={!!errorMessage}
        label={label}
        {...rest}
      />
      <Label inputId={id}>{label}</Label>
    </Wrapper>
  )
}

export default TextInput
