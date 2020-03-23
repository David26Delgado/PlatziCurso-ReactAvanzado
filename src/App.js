import React from 'react'

// Components
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'

// Containers
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'

// Styled Components
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2} />
  </>
)
