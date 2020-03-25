import React from 'react'

// Styled Components
import { Error, Form, Input, Button, Title } from './styles'

// Custom Hooks
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} type='email' placeholder='Email' {...email} />
        <Input disabled={disabled} type='password' placeholder='Password' {...password} />
        <Button disabled={disabled}>{title}</Button>
        {error && <Error>{error}</Error>}
      </Form>
    </>
  )
}
