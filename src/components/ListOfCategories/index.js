import React from 'react'

// Components
import { Category } from '../Category'

// Styled Components
import { List, Item } from './styles'

// Api
import { categories } from './../../../api/db'

export const ListOfCategories = () => {
  return (
    <List>
      {categories.map((category) => <Item key={category.id}><Category {...category} /></Item>)}
    </List>
  )
}
