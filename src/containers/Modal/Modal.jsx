import React from 'react'
import { Dialog, Box, Grid, TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import { useStyles } from './modal.styles'

export const Modal = (props) => {
  const history = useHistory()
  const classes = useStyles()
  const { open, setOpen, onCloseAction, enterpriseData = {} } = props
  const { name, value, anualFat, desc, cnpj } = enterpriseData

  const handleClose = () => {
    setOpen(false)
    if (onCloseAction) onCloseAction()
  }

  const handleClick = () => {
    history.push('/registration')
  }

  return (
    <Dialog onClose={handleClose} open={open} className={classes.modal}>
      <Box alignItems="center" marginTop="30px" margin="20px">
        <Grid container spacing={10}>
          <Grid item xs={12} xl={12} lg={12}>
            <TextField
              disabled
              variant="outlined"
              fullWidth
              id="nome da empresa"
              name="nome da empresa"
              label="Nome de Empresa"
              value={name}
            />
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={12} xl={12} lg={12}>
            <TextField
              disabled
              variant="outlined"
              fullWidth
              id="cnpj"
              name="cnpj"
              label="CNPJ"
              value={cnpj}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} xl={12} lg={12}>
            <TextField
              disabled
              variant="outlined"
              fullWidth
              id="demanda"
              name="demanda"
              label="Demanda R$"
              value={value}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} xl={12} lg={12}>
            <TextField
              disabled
              variant="outlined"
              fullWidth
              id="faturamento"
              name="faturamento"
              label="Faturamento"
              value={anualFat}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} xl={12} lg={12}>
            <TextField
              disabled
              fullWidth
              variant="outlined"
              id="sobre"
              name="sobre"
              placeholder="Sobre"
              multiline
              rows={4}
              value={desc}
            />
          </Grid>
        </Grid>

        <Box flexDirection="row" justifyContent="flex-end" padding="20px 0">
          <Button
            className={classes.submitButton}
            type="submit"
            variant="contained"
            onClick={() => handleClick()}
            disableElevation
          >
            Cadastrar Nova Empresa
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}
