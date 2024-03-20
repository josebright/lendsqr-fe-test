import React from 'react'

interface ErrorComponentProps {
  errorMessage?: string
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ errorMessage }) => {
  if (errorMessage == null || errorMessage.trim() === '') return null

  return (
    <div className="error-message">
      {errorMessage}
    </div>
  )
}

export default ErrorComponent
