import React from 'react'
import { Avatar, Typography, Menu, MenuItem } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../../store/ducks/auth/actions'

import { useStyles } from './user.style'

export const User = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.loginReducer.user)
  const { name: userName } = user
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
    console.log('Clicou')
  }

  const handleClose = () => {
    console.log('Clicou')
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className={classes.userInfo}>
      <div className={classes.userBox}>
        <div className={classes.userInfoName}>
          <Typography variant="subtitle1">Olá,</Typography>
          <Typography variant="subtitle1" className={classes.username}>
            {userName}
          </Typography>
        </div>
        <Avatar className={classes.avatarContainer} onClick={handleMenu}>
          <PersonIcon className={classes.avatarIcon} fontSize="large" />
        </Avatar>
      </div>

      <Menu
        className={classes.menuContainer}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem className={classes.menuItem} onClick={() => handleLogout()}>
          Sair
        </MenuItem>
      </Menu>
    </div>
  )
}
