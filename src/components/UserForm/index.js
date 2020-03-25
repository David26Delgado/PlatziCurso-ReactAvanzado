import React from 'react'

// Styled Components
import { Form, Input, Button, Title } from './styles'

// Custom Hooks
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit, title }) => {
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
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input type='email' placeholder='Email' {...email} />
        <Input type='password' placeholder='Password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
