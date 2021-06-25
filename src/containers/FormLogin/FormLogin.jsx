import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/ducks/auth/actions'
import { useHistory } from 'react-router-dom'

import { Box, TextField, Button, CircularProgress } from '@material-ui/core'

import { useStyles } from './form-login.styles'

export const FormLogin = () => {
  const history = useHistory()
  const token = useSelector((state) => state.loginReducer.token)
  const loading = useSelector((state) => state.loginReducer.loading)

  console.log(loading)
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    if (token) {
      history.push('/home')
    }
  }, [token, history])

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (data) => {
    const { email, password } = data
    dispatch(login(email, password))
    console.log(data)
  }

  return (
    <Box className={classes.container} mx="auto">
      <form className={classes.Modal} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              className={classes.email}
              variant="outlined"
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              type="password"
              variant="outlined"
              fullWidth
              id="password"
              name="password"
              label="Senha"
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Box flexDirection="row" justifyContent="flex-end">
          {!loading ? (
            <Button
              className={classes.button}
              variant="contained"
              type="submit"
            >
              Entrar
            </Button>
          ) : (
            <CircularProgress />
          )}
        </Box>
      </form>
    </Box>
  )
}
