import React from 'react'
import { Link } from 'react-router-dom'

interface TextButtonProps {
  text: string
  href: string
}

const TextButton: React.FC<TextButtonProps> = ({ text, href }) => {
  return (
    <Link className="text-button" to={href}>
      {text}
    </Link>
  )
}

export default TextButton
