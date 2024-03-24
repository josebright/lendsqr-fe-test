import React, { useState, useEffect } from 'react'
import './index.scss'
import Spacer from '../SpacerComponent'

interface BoxProps {
  icon: string
  text: string
  figure: string | number
}

const BoxContainer: React.FC<BoxProps> = ({ icon, text, figure }) => {
  const [iconSrc, setIconSrc] = useState('')

  useEffect(() => {
    const loadIcon = async (): Promise<void> => {
      try {
        const iconModule = await import(`../../../utils/Assests/${icon}`)
        setIconSrc(iconModule.default as string)
      } catch (err) {
        console.error('Failed to load icon:', err)
      }
    }

    void loadIcon()
  }, [icon])

  return (
        <div className='box'>
            <div className='sub-box'>
                {(iconSrc.length > 0) ? <img src={iconSrc} alt={text} style={{ width: '50px', height: '50px', borderRadius: '50%' }} /> : null}
                <Spacer height='0.5rem' />
                <div className='box-text-title'>{text}</div>
                <Spacer height='0.5rem' />
                <div className='box-text-figure'>{figure}</div>
            </div>
        </div>
  )
}

export default BoxContainer
