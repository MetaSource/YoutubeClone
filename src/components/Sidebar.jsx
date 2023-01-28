import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'
const selectedCategory = 'New'

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
        overflow: "auto",
        height: {sx: 'auto', md: '95%'},
        flexDirection: {md: 'column'},
    }}
  >
      { categories.map( (category)=> (
          <button 
            className="category-btn"
            key = {category.name}
            style={{background: category.name === selectedCategory && '#FC1503', color: 'white'}}>
              <span style={{color: category.name === selectedCategory? 'white' : 'red', marginRight: 15}}>{category.icon}</span>
              <span style={{opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
          </button>
      ))}
  </Stack>
)

export default Sidebar