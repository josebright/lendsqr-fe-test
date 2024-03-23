import React from 'react'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import TextData from '../../../utils/TextData/staticTexts.json'
import './index.scss'

const SearchBar: React.FC = () => {
  return (
    <TextField
      fullWidth
      type="search"
      label={TextData.usersPage.search}
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
