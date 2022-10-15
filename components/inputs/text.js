import { useId } from 'react'

import { Alert, Input, Label, Wrapper } from './styles'

const TextInput = ({ label, name, placeholder, errorMessage }) => {
  const id = useId()
  console.log({ id })
  return (
    <Wrapper flexDirection="column-reverse">
      {errorMessage && <Alert inputId={id}>{errorMessage}</Alert>}
      <Input
        id={id}
        type="text"
        name={name}
        placeholder={placeholder}
        hasError={!!errorMessage}
      />
      <Label inputId={id}>{label}</Label>
    </Wrapper>
  )
}

export default TextInput
