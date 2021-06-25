import React, { useState } from 'react'

import {
  Box,
  Grid,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
  Typography
} from '@material-ui/core'

import { Modal } from '../../containers/Modal'
import { useStyles } from './card.styles'
import { PaginationComponent } from '../index'

export const CardEnterprise = (props) => {
  const { enterpriseData, page, handleChangePage, numberOfPages } = props
  const [openCreate, setOpenCreate] = useState(false)
  const classes = useStyles()

  const handleClick = () => {
    setOpenCreate(true)
  }
  console.log(enterpriseData)

  return (
    <Box>
      <Grid className={classes.mainGrid} container xl={3} spacing={4}>
        {enterpriseData?.map((data, index) => {
          return (
            <Grid minWidth="md" key={index + 1} item>
              <div key={index + 1}>
                <Modal
                  open={openCreate}
                  enterpriseData={data}
                  setOpen={setOpenCreate}
                />
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      className={classes.media}
                      alt="Contemplative Reptile"
                      image="https://www.ospcontabilidade.com.br/wp-content/uploads/2020/07/empresa.png"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {data.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {data.desc}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      onClick={handleClick}
                      size="small"
                      className={classes.button}
                    >
                      Ver Mais +
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          )
        })}
      </Grid>
      <Box
        borderBottom={0}
        justifyContent="flex-center"
        className={classes.boxPagination}
        data-testid="table_pagination"
      >
        <PaginationComponent
          count={numberOfPages}
          page={page}
          onChangePage={handleChangePage}
        />
      </Box>
    </Box>
  )
}
