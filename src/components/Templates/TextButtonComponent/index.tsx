import React from 'react'

interface TextButtonProps {
  text: string
  href: string
}

const TextButton: React.FC<TextButtonProps> = ({ text, href }) => {
  return (
    <a className="text-button" href={href}>
      {text}
    </a>
  )
}

export default TextButton
