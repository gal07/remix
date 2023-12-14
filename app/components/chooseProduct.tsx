import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Icon from '@mui/material/Icon';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export function chooseProduct(_show :boolean,data: any) {
  const [open, setOpen] = React.useState(false);  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  data.map((e: any)=>{
    console.log(e.product_name);
  })

  return (
    <React.Fragment>
      {/* FAB */}
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab sx={{
                position: "fixed",
                bottom: (theme) => theme.spacing(2),
                right: (theme) => theme.spacing(2)
              }} 
              color="primary"
              aria-label="add"
              onClick={()=>{
                handleClickOpen()
              }}
              >
            <Icon>shopping_cart</Icon>
          </Fab>
        </Box>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Icon>close</Icon>
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Product List
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        {
          data.map((product: any)=>{

            <p>product.product_name</p>

          })
        }
      </Dialog>
    </React.Fragment>
  );
}