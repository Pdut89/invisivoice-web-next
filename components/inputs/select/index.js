import { useId, useRef, useState } from 'react'

import { Flex } from 'components/styled'

import { Alert, Label, Wrapper } from '../styles'
import { CustomSelect, CustomOption, NativeSelect } from './styles'
import useHandleClickOutside from 'utils/hooks/use-handle-click-outside'

const Select = ({
  name,
  label,
  options,
  errorMessage,
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
        {...rest}
      >
        <option hidden disabled selected value="">
          {`Select ${name}`}
        </option>
        {options.map(({ label, value }) => (
          <option key={value} label={label}>
            {value}
          </option>
        ))}
      </NativeSelect>
      <Label isActive={isExpanded} inputId={id}>
        {label}
      </Label>

      <CustomSelect isActive={isExpanded} onClick={() => setIsExpanded(true)}>
        {options.find((option) => option.value === value)?.label ||
          `Select ${name}`}
      </CustomSelect>

      {isExpanded && (
        <Flex
          as="ul"
          flexDirection="column"
          position="absolute"
          top="100%"
          left="0"
          width="100%"
          py="0.5rem"
          boxShadow="0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.5)"
          borderRadius="xxsmall"
          bg="white"
        >
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
        </Flex>
      )}
    </Wrapper>
  )
}

export default Select
