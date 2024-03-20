import React from 'react'

interface SpacerProps {
  width?: string
  height?: string
}

const Spacer: React.FC<SpacerProps> = ({ width, height }) => {
  const displayStyle = width !== undefined ? 'inline-block' : 'block'

  const style = {
    width: width ?? 'auto',
    height: height ?? 'auto',
    display: displayStyle
  }

  return <div style={style} />
}

export default Spacer
