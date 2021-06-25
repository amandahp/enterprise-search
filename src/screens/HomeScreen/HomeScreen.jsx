import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEnterprise } from '../../store/ducks/enterprise/actions'

import { Box, Typography } from '@material-ui/core'

import { Header } from '../../containers/Header'
import { HeaderSearch } from '../../containers/HeaderSearch'
import { CardHeader } from '../../containers/CardHeader'
import { CardEnterprise } from '../../components/Card/Card'

import { useStyles } from './home-screen.styled'

export const HomeScreen = () => {
  const numberOfItemsForPage = 12
  const [filter, setFilter] = useState('')
  const [page, setPage] = useState(1)
  const [enterprisePaginated, setEnterprise] = useState([])
  const [filteredData, setFilteredData] = useState('')
  const [notFoundMessage, setNotFound] = useState(false)

  const dispatch = useDispatch()
  const classes = useStyles()

  const [inputSearch, setInputSearch] = useState('')
  const enterpriseData = useSelector(
    (state) => state.enterpriseReducer.enterprises
  )

  useEffect(() => {
    if ((inputSearch && filteredData.length) || filter) {
      setEnterprise(filteredData)
    } else if (inputSearch) {
      setEnterprise([])
      setNotFound(true)
    }
  }, [filteredData])

  useEffect(() => {
    dispatch(getEnterprise())
  }, [])

  useEffect(() => {
    if (inputSearch && enterprisePaginated.length) {
      setNotFound(false)
      console.log(enterprisePaginated)
      setFilteredData(
        enterprisePaginated.filter((data) =>
          data.name.endsWith(
            inputSearch.toLowerCase() ||
              data.name.startsWith(inputSearch.toLowerCase())
          )
        )
      )
    } else {
      setPage(1)
      setNotFound(false)
      handlePaginateArray(1)
    }
  }, [inputSearch])

  useEffect(() => {
    if (filter) {
      setFilteredData(enterpriseData.filter((data) => data.anualFat === filter))
    }
  }, [filter])

  const handleChange = (value) => {
    setInputSearch(value)
    setNotFound(false)
  }

  const handlePaginateArray = (page) => {
    console.log(enterpriseData)
    setEnterprise(
      enterpriseData.slice(
        (page - 1) * numberOfItemsForPage,
        page * numberOfItemsForPage - 1
      )
    )
  }

  const handleChangePage = (event, page) => {
    setPage(page)
  }

  const handleChangeSelect = (value) => {
    setFilter(value)
  }

  useEffect(() => {
    if (enterpriseData.length) {
      handlePaginateArray(page)
    }
  }, [enterpriseData, page])

  return (
    <>
      <Header privateHeader={true} />
      <HeaderSearch
        handleInputChange={handleChange}
        inputPlaceHolder="Busque uma empresa"
        inputValue={inputSearch}
      />
      <CardHeader
        handleChangeSelect={handleChangeSelect}
        title="Empresas"
        showInput={true}
      />
      <Box className={classes.main}>
        {enterpriseData.length > 0 && !notFoundMessage && (
          <CardEnterprise
            enterpriseData={enterprisePaginated}
            page={page}
            handleChangePage={handleChangePage}
            numberOfItems={numberOfItemsForPage}
            numberOfPages={Math.ceil(enterpriseData.length / 12)}
          />
        )}
        {notFoundMessage && (
          <Typography variant="body2" color="textSecondary" component="p">
            Nenhuma empresa com esse nome encontrada
          </Typography>
        )}
      </Box>
    </>
  )
}
