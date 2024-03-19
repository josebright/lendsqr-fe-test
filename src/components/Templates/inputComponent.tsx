import React, { useState } from 'react'

interface InputProps {
  type: 'text' | 'password' | 'dropdown'
  width: string
  label?: string
  options?: string[]
}

const InputComponent: React.FC<InputProps> = ({ type, label, width, options = [] }) => {
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
          style={inputStyles}
          value={dropdownValue}
          onChange={(e) => { setDropdownValue(e.target.value) }}
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
