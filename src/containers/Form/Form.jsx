import React, { useCallback } from 'react'

import { Controller, useForm } from 'react-hook-form'
import { useHistory } from 'react-router'

import {
  Box,
  Grid,
  Select,
  TextField,
  Button,
  InputLabel,
  FormControl
} from '@material-ui/core'

import { useStyles } from './form.styles'

export const Form = (props) => {
  const { control, handleSubmit } = useForm()
  const { sacValues } = props
  const classes = useStyles()
  const history = useHistory()

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleRedirect = useCallback(() => {
    history.push('/home')
  }, [history])

  return (
    <>
      <Box alignItems="center" marginTop="30px">
        <form className={classes.Modal} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12} lg={12}>
              <Controller
                name="nome da empresa"
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
                name="demanda"
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
                name="product"
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
                      />
                    </FormControl>
                  </>
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12} lg={12}>
              <Controller
                name="sobre"
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
            <Button
              className={classes.submitButton}
              type="submit"
              variant="contained"
              disableElevation
            >
              Cadastrar Empresa
            </Button>
          </Box>
        </form>
      </Box>
    </>
  )
}
