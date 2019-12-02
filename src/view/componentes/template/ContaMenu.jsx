import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { isAdmin } from '../../../shared/auth';
import styles from './style';
import history from '../../../shared/history';

const ContaMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    handleClose();
    props.logout();
  };

  const irParaAdministracao = () => {
    handleClose();
    history.push('/custopec');
  };

  const classes = styles();
  return (
    <>
      <AccountCircle className={classes.icon} onClick={handleClick} />
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {isAdmin() && <MenuItem onClick={irParaAdministracao}>Administração</MenuItem>}
        <MenuItem onClick={logout}>Sair</MenuItem>
      </Menu>
    </>
  );
};

export default ContaMenu;
