import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
    root: {
      width: 230,
    },
  });

const Sidebar = () => {

    const classes = useStyles();
    return (
        <Paper className={classes.root}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Add Product</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Manage Product</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
                Management
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">
                Back
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
    );
};

export default Sidebar;