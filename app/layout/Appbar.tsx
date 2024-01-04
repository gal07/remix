import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, useLoaderData } from "@remix-run/react";
import { commitSession, getSession } from '~/sessions';
import { json } from '@remix-run/node';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const loader = async ({ request }: { request: Request }) => {

  const session = await getSession(request.headers.get("Cookie"));
  
    session.flash("error", "nologin");       

  const data = {
    error: "asdasdasdad"
  };
  
  return json(data, {
    headers: {
        "Set-Cookie": await commitSession(session)
    }
});

}

export default function Appbar() {
  
  const data = useLoaderData < typeof loader > ();

  // state for button apbar
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const urls = [
    '/',
    'sales',
    'order',
    'users',
    'logout'
  ];

  // toggle Appbar drawer
  const toggleDrawer =
  (anchor: Anchor, open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // menu
  const menu = [
    'Dashboard', 
    'Sales', 
    'Order', 
    'Users', 
    'Logout'
  ];
  

  // UI Drawer
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menu.map((text, index) => (
          <NavLink to={urls[index]}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <Icon>dashboard</Icon> : <Icon>star</Icon>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
      {data.error ? data.error:data.error}
    </Box>
  );

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar color={"primary"} position="static">
            <Toolbar variant="dense">
              <IconButton 
                onClick={toggleDrawer("left", true)}
                edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <Icon>menu</Icon>
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                ECCS POS APPS
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>

        </Box>
      );
    
}