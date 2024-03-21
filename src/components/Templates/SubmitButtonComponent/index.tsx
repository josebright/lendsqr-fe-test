import React from 'react'

interface SubmitButtonProps {
  variant: 'primary' | 'secondary'
  width: string
  buttonText: string
  color?: string
  disabled?: boolean
}

const SubmitButtonComponent: React.FC<SubmitButtonProps> = ({ variant, width, buttonText, color, disabled }): JSX.Element => {
  return (
    <button
      className={`submit-button ${variant} ${disabled}`}
      disabled={disabled}
      type="submit"
      style={{
        width,
        color: variant === 'secondary' ? color : '',
        borderColor: variant === 'secondary' ? color : ''
      }}
    >
      {buttonText}
    </button>
  )
}

export default SubmitButtonComponent
