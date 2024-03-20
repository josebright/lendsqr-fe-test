import React from 'react'

interface SubmitButtonProps {
  type: 'primary' | 'secondary'
  width: string
  buttonText: string
  color?: string
  disabled?: boolean
}

const SubmitButtonComponent: React.FC<SubmitButtonProps> = ({ type, width, buttonText, color, disabled }): JSX.Element => {
  return (
    <button
      className={`submit-button ${type} ${disabled}`}
      disabled={disabled}
      style={{
        width,
        color: type === 'secondary' ? color : '',
        borderColor: type === 'secondary' ? color : ''
      }}
    >
      {buttonText}
    </button>
  )
}

export default SubmitButtonComponent
