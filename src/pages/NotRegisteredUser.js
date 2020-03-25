import React from 'react'
import Context from '../Context'

// Components
import { UserForm } from '../components/UserForm'

// Containers
import { RegisterMutation } from '../containers/RegisterMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables })
                      .then(activateAuth)
                  }

                  const errorMessage = error && 'El usuario ya existe o hay algún problema'

                  return <UserForm disabled={loading} error={errorMessage} title='Registrarse' onSubmit={onSubmit} />
                }
              }
            </RegisterMutation>
            <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
          </>
        )
      }
    }
  </Context.Consumer>
)
