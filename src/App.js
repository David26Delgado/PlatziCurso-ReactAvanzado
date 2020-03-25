import React from 'react'

// Router
import { Router } from '@reach/router'

// Context
import Context from './Context'

// Components
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

// Pages
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

// Styled Components
import { GlobalStyles } from './styles/GlobalStyles'

// Constants
// const UserLogged = ({ children }) => {
//   return children({ isAuth: false })
// }

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
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? (
                <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
              )
              : (
                <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                </Router>
              )
        }
      </Context.Consumer>
      <NavBar />
    </>
  )
}
