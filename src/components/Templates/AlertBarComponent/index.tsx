import React, { useEffect } from 'react'

interface AlertBarProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

const AlertBar: React.FC<AlertBarProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 30000)
    return () => { clearTimeout(timer) }
  }, [onClose])

  return (
    <div className={`alert-bar ${type}`}>
      <button onClick={onClose} className="alert-close-btn">X</button>
      {message}
    </div>
  )
}

export default AlertBar
