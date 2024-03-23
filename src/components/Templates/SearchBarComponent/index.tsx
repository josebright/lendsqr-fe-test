// src/components/SearchBar.tsx
import React from 'react'
import { TextField } from '@mui/material'

const SearchBar: React.FC = () => {
  return (
    <TextField
      fullWidth
      type="search"
      label="Search"
      variant="outlined"
    />
  )
}

export default SearchBar
