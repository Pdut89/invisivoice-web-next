import { useId, useRef, useState } from 'react'

import { Alert, Label, Wrapper } from '../styles'
import { NativeSelect, CustomSelect, OptionsList, CustomOption } from './styles'
import useHandleClickOutside from 'utils/hooks/use-handle-click-outside'

const Select = ({
  name,
  label,
  options,
  errorMessage,
  hasError = !!errorMessage,
  value,
  onChange = console.log,
  ...rest
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const wrapperRef = useRef()
  const id = useId()

  useHandleClickOutside(wrapperRef, () => setIsExpanded(false))

  return (
    <Wrapper ref={wrapperRef}>
      {errorMessage && <Alert inputId={id}>{errorMessage}</Alert>}
      <NativeSelect
        id={id}
        name={name}
        label={label}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        hasError={hasError}
        {...rest}
      >
        <option hidden disabled defaultValue value="">
          {`Select ${name}`}
        </option>
        {options.map(({ label, value }) => (
          <option key={value} label={label}>
            {value}
          </option>
        ))}
      </NativeSelect>
      <Label isActive={isExpanded} inputId={id} hasError={hasError}>
        {label}
      </Label>

      <CustomSelect isActive={isExpanded} onClick={() => setIsExpanded(true)}>
        {options.find((option) => option.value === value)?.label ||
          `Select ${name}`}
      </CustomSelect>

      {isExpanded && (
        <OptionsList>
          {options.map(({ label, value: dataValue }) => (
            <CustomOption
              key={dataValue}
              dataValue={dataValue}
              isSelected={value === dataValue}
              onClick={({ target }) => {
                const selectedValue = target.getAttribute('data-value')
                onChange(selectedValue)
                setIsExpanded(false)
              }}
            >
              {label}
            </CustomOption>
          ))}
        </OptionsList>
      )}
    </Wrapper>
  )
}

export default Select
