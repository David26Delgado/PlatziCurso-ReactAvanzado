import React from 'react'

// Components
import { ListOfCategories } from './components/ListOfCategories'

// Styled Components
import { GlobalStyle } from './GlobalStyles'

export const App = () => (
  <>
    <GlobalStyle />
    <ListOfCategories />
  </>
)
