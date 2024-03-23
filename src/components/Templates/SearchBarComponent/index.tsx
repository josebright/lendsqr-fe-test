import React from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import './index.scss'

const SearchBar: React.FC = () => {
  return (
    <TextField
      fullWidth
      type="search"
      label="Search for anything"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {}}
              className='searc-Icon'
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
      className='search-textfield'
    />
  )
}

export default SearchBar
