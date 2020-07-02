import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/Container';
import Container from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import MoreIcon from '@material-ui/icons/MoreVert';
import utilities from '../../utilities';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  }, 
  menuButton: {
    marginRight: theme.spacing(2)
  }, 
  title: {
    display: 'block',
    cursor: 'pointer'
  }, 
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }, 
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  }, 
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
})
);


function PrimaryAppBar() {
  const totalQuantity: number = useSelector(({ checkout}) => {
    let totalQuantity = 0;

    if(checkout.data) {
      totalQuantity = checkout.data.lineItems.edges.reduce((total, lineItem) => {
        return total + lineItem.node.quantity;
      }, 0);
    }

    return totalQuantity;
  });


  const theme = useTheme();
  
}

