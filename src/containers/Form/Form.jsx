import React, { useState, useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { insertEnterprise } from '../../store/ducks/enterprise/actions'

import { Controller, useForm } from 'react-hook-form'
import { revenueValues } from '../../utils/revenueValues'
import { CircularProgress } from '@material-ui/core'

import { useHistory } from 'react-router'

import {
  Box,
  Grid,
  Select,
  TextField,
  Button,
  InputLabel,
  FormControl,
  MenuItem,
  Typography
} from '@material-ui/core'

import { useStyles } from './form.styles'

export const Form = () => {
  const dispatch = useDispatch()

  const loading = useSelector((state) => state.enterpriseReducer.loading)
  const [randomKey, setRandomKey] = useState(Math.random())

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      cnpj: '',
      value: '',
      desc: ''
    }
  })

  const classes = useStyles()
  const history = useHistory()

  console.log(loading, ' loadinggg')

  const onSubmit = (data) => {
    dispatch(insertEnterprise(data))
    setRandomKey(Math.random())
    reset()
  }

  const handleRedirect = useCallback(() => {
    history.push('/home')
  }, [history])

  return (
    <>
      <Box key={randomKey} alignItems="center" marginTop="30px">
        <form className={classes.Modal} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12} lg={12}>
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="nome da empresa"
                    name="nome da empresa"
                    label="Nome de Empresa"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12} lg={12}>
              <Controller
                name="cnpj"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="cnpj"
                    name="cnpj"
                    label="CNPJ"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12} lg={12}>
              <Controller
                name="value"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="demanda"
                    name="demanda"
                    label="Demanda R$"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12} lg={12}>
              <Controller
                name="anualFat"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel id="faturamento">
                        Faturamento Anual
                      </InputLabel>
                      <Select
                        fullWidth
                        id="faturamento"
                        name="faturamento"
                        label="Faturamento Anual"
                        value={value}
                        onChange={onChange}
                      >
                        {revenueValues.map((options, index) => {
                          return (
                            <MenuItem
                              key={index + options.label}
                              value={options.value}
                            >
                              <Typography variant="h6">
                                {options.label}
                              </Typography>
                            </MenuItem>
                          )
                        })}
                      </Select>
                    </FormControl>
                  </>
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12} lg={12}>
              <Controller
                name="desc"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="sobre"
                    name="sobre"
                    placeholder="Sobre"
                    multiline
                    rows={4}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Box flexDirection="row" justifyContent="flex-end" padding="40px 0">
            <Button
              className={classes.cancelButton}
              color="primary"
              type="reset"
              onClick={handleRedirect}
            >
              Cancelar
            </Button>
            {!loading ? (
              <Button
                className={classes.submitButton}
                type="submit"
                variant="contained"
                disableElevation
              >
                Cadastrar Empresa
              </Button>
            ) : (
              <CircularProgress />
            )}
          </Box>
        </form>
      </Box>
    </>
  )
}
