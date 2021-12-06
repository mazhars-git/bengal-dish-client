import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListIcon from '@material-ui/icons/List';
import Typography from '@material-ui/core/Typography';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

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
                        <AddIcon color="secondary" fontSize="medium" />
                    </ListItemIcon>
                    <Typography variant="inherit">Add Product</Typography>
                </MenuItem>
                
                <MenuItem>
                    <ListItemIcon>
                        <ListIcon color="secondary" fontSize="medium" />
                    </ListItemIcon>
                    <Typography variant="inherit">Manage Product</Typography>
                </MenuItem>

                <MenuItem>
                    <Link to="/">
                        <ListItemIcon>
                            <ExitToAppIcon color="secondary" fontSize="medium" />
                        </ListItemIcon>
                        <Typography variant="inherit">
                            Back
                        </Typography>
                    </Link>
                </MenuItem>
            </MenuList>
        </Paper>
    );
};

export default Sidebar;