import {
  forwardRef,
  useId,
  useRef,
  // useState
} from 'react'

// import useHandleClickOutside from 'utils/hooks/use-handle-click-outside'

import { Alert, Label, Wrapper, Input } from '../styles'

const Select = forwardRef(({ label, options, errorMessage, ...rest }, ref) => {
  // const [isExpanded, setIsExpanded] = useState(false)
  const wrapperRef = useRef()
  const id = useId()
  const hasError = Boolean(errorMessage)

  // useHandleClickOutside(wrapperRef, () => setIsExpanded(false))

  return (
    <Wrapper ref={wrapperRef}>
      {errorMessage && <Alert inputId={id}>{errorMessage}</Alert>}
      <Input
        as="select"
        ref={ref}
        id={id}
        label={label}
        onChange={({ target }) => onChange(target.value)}
        hasError={hasError}
        {...rest}
      >
        {/* WIP: Default selection */}
        {/* <option defaultValue value="">
            - {label} -
          </option> */}
        {options.map(({ label, value }) => (
          <option key={value} label={label}>
            {value}
          </option>
        ))}
      </Input>
      <Label inputId={id}>{label}</Label>

      {/* TODO: Add custom select here */}
    </Wrapper>
  )
})

Select.displayName = 'Select'

export default Select
