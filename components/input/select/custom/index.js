// WIP: Custom select
import { StyledInput, OptionsList, CustomOption } from './styles'

const CustomSelect = ({ isExpanded, setIsExpanded }) => {
  return (
    <>
      <StyledInput isActive={isExpanded} onClick={() => setIsExpanded(true)}>
        {options.find((option) => option.value === value)?.label ||
          `Select ${name}`}
      </StyledInput>
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
    </>
  )
}

export default CustomSelect
