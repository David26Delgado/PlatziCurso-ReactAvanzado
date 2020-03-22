import React, { useEffect, useState } from 'react'

// Components
import { Category } from '../Category'

// Styled Components
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window.fetch('https://petgram-server-ddelgado-5xwsbs4j9.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  return (
    <List>
      {categories.map((category) => <Item key={category.id}><Category {...category} /></Item>)}
    </List>
  )
}
