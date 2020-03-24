import React from 'react'

// Router
import { Router } from '@reach/router'

// Components
import { Logo } from './components/Logo'

// Containers
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

// Pages
import { Home } from './pages/Home'

// Styled Components
import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : (
            <Router>
              <Home path='/' />
              <Home path='/pet/:id' />
            </Router>
          )
      }
    </>
  )
}
