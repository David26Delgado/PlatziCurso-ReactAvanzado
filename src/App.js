import React from 'react'

// Router
import { Router } from '@reach/router'

// Components
import { Logo } from './components/Logo'

// Containers
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

// Pages
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

// Styled Components
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
    </>
  )
}
