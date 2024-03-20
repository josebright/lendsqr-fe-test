import React, { useState } from 'react'

interface InputProps {
  field: {
    name: string
    value: any
    onChange: (e: React.ChangeEvent<any>) => void
    onBlur: (e: React.FocusEvent<any>) => void
  }
  type: 'text' | 'password' | 'dropdown'
  width: string
  label?: string
  options?: string[]
}

const InputComponent: React.FC<InputProps> = ({ field, type, label, width, options = [] }) => {
  const [inputType, setInputType] = useState<string>(type)
  const [dropdownValue, setDropdownValue] = useState<string>('')

  const togglePasswordVisibility = (): void => {
    setInputType(inputType === 'password' ? 'text' : 'password')
  }

  const renderInputOrDropdown = (): JSX.Element => {
    const inputStyles = {
      width
    }

    if (type === 'dropdown') {
      return (
        <select
          {...field}
          style={inputStyles}
          value={dropdownValue}
          onChange={(e) => {
            field.onChange(e)
            setDropdownValue(e.target.value)
          }}
          className="input-field"
          aria-label={label ?? 'Dropdown'}>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )
    } else {
      return (
        <>
          <input
            {...field}
            style={inputStyles}
            type={inputType}
            className="input-field"
            placeholder={label}
            aria-label={label ?? 'Input field'}
          />
          {type === 'password' && (
            <button
              onClick={togglePasswordVisibility}
              className="toggle-password"
              type="button"
            >
              {inputType === 'password' ? 'SHOW' : 'HIDE'}
            </button>
          )}
        </>
      )
    }
  }

  return (
    <div className="input-container">
      {renderInputOrDropdown()}
    </div>
  )
}

export default InputComponent
