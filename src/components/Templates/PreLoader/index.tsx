import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import './index.scss'

const CircularIndeterminate: React.FC = () => {
  return (
    <Box className='overlay'>
      <CircularProgress />
    </Box>
  )
}

export default CircularIndeterminate
