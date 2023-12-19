import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction, json } from '@remix-run/node';
import { getProducts } from '~/data/sourceData';
import { Form, useLoaderData, useNavigate, useRevalidator, useSubmit} from '@remix-run/react';
import Grid from '@mui/material/Grid';
import { Badge, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle, Fab, FormControl, FormControlLabel, InputBase, InputLabel, MenuItem, Select, SelectChangeEvent, Switch, TextField, alpha } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Search } from '@mui/icons-material';
import { userPrefs } from "~/cookies.server";
import { getSession, commitSession } from "../sessions";

export const meta: MetaFunction = () => {

    return [
      { title: "ECCS POS - Choose Product" },
      { name: "description", content: "Welcome to eccs-pos!" },
    ];
  
  };

export async function loader({
    params,
    request
  }: LoaderFunctionArgs) {

    const session = await getSession(
      request.headers.get("Cookie")
    );
    session.set("userId", "90000");

    let page = params.page as string;
    const product = await getProducts(false,parseInt(page));    
    return product;
  
}

export default function Productadd() {

  const revalidator = useRevalidator();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const product = useLoaderData < typeof loader > ();  
  const [pagination, setPagination] = React.useState(product.result.pagination);

  const navigate = useNavigate();
  const navigates = () => {
    navigate("/sales");
  };
  

  const changePage = (page: number) => {
    console.log("changePage "+page);
      // revalidator.revalidate()
      navigate("/sales/add/"+page);
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  React.useEffect(()=>{
    console.log("use effect in sales add");
    let cart = JSON.parse(localStorage.getItem('cart') || '{}');
    setBadges(cart.length)

  })

  const [open, setOpen] = React.useState(false);
  const [openProduct, setOpenProduct] = React.useState({});
  const [qty, setQty] = React.useState(1);
  const [badges, setBadges] = React.useState(0);

  const AddToCart = async (item :any) => {
    
    let oldcart = JSON.parse(localStorage.getItem('cart') || '{}');
    let cart = [];
    if (oldcart?.length > 0) {

        oldcart.map((e:any)=>{
          cart.push(e);
        })

        Object.assign(item, { qty_checkout: qty });
        cart.push(item);

    }else{

        Object.assign(item, { qty_checkout: qty });
        cart.push(item);

    }

    setBadges(cart.length);
    localStorage.setItem("cart",JSON.stringify(cart));
    handleClose();
  }

  const qtyInput = (v: any) => {
    setQty(v)    
  }

  const handleClickOpen = (product :any) => {
    setOpen(true);
    setOpenProduct(product);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AddProduct = () => {
    return(

      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Add To Cart</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please insert Quantity and choose variant if available.
            </DialogContentText>
            <Box
              noValidate
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 'auto',
                width: 'fit-content',
              }}
            >
              <FormControl sx={{ mt: 2, minWidth: 120 }}>
                <TextField label="Qty" id="outlined-size-normal" defaultValue="1" type="number" onChange={(event: any) =>{
                  console.log(event.target.value);
                  qtyInput(event.target.value);
                }} />
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>{
              AddToCart(openProduct)
            }}>Add To Cart</Button>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

    );

  }
  
  const submit = useSubmit();

  const searchProduct = (v: any) => {

    console.log("search "+v);
    const formData = new FormData();
    const currentPage = pagination.next_page-1;
    submit(formData, {
      action: "/sales/add/"+currentPage,
      method: "GET",
      encType: "application/x-www-form-urlencoded",
      preventScrollReset: false,
      replace: false,
      relative: "route",
    });

  }

  return (
    <div style={{marginBottom:"4em"}}>

        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Badge sx={{
                  position: "fixed",
                  bottom: (theme) => theme.spacing(2),
                  right: (theme) => theme.spacing(2)
                  }}  badgeContent={badges} color="primary">
              <Fab 
                  color="primary"
                  aria-label="add"
                  onClick={navigates}
                  >
              <Icon>shopping_basket</Icon>
              </Fab>
            </Badge>
        </Box>
       

        <Grid container style={{marginTop:"1em"}}>
            <Grid item xs={12} style={{"textAlign":"center","marginBottom":"1em"}}>
                <Typography variant={"h4"}>
                    Choose Product
                </Typography>

                <Search>
                  <SearchIconWrapper>
                    <Icon>search</Icon>
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onKeyUp={(event) => {
                      searchProduct((event.target as HTMLInputElement).value)
                    }}
                  />
                </Search>

            </Grid>
        </Grid>

          {product.result.data.length ? (
              <Grid container xs={12} spacing={2}>
                {product.result.data.map((item: any) => (
                  <Grid item xs={12} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            action={
                            <IconButton aria-label="settings">
                                <Icon>more_vert</Icon>
                            </IconButton>
                            }
                            title={item.nama_produk}
                            subheader={item.pidr}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://assets.eccs.center/imgview/0/small-produk-561/madu.png"
                            // image={item.imageList}
                            alt={item.nama_produk}
                        />
                        <CardContent>
                           
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton onClick={()=>{
                              // AddToCart(item)
                              handleClickOpen(item)
                            }} aria-label="add to favorites">
                            <Icon>add_shopping_cart</Icon>
                            </IconButton>
                            {/* <IconButton aria-label="share">
                            <Icon>visibility</Icon>
                            </IconButton> */}
                        </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <p>
                <i>No Product</i>
              </p>
            )}

        <Stack sx={{"alignItems":"center","margin":"2em"}} spacing={3}>
            <Pagination
            defaultPage={pagination.next_page-1}
            count={pagination.total_page} 
            onChange={(e,value)=>{
                console.log(e);
                console.log(value);
                changePage(value);
            }}
            variant="outlined" 
            shape="rounded" />
        </Stack>

        {AddProduct()}

    </div>
    
  );
}

export async function action({ request }: ActionFunctionArgs) {
  console.log("action function in sales add");
  const body = await request.formData();
  return true;

}