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
import { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction, json, redirect } from '@remix-run/node';
import { getProducts } from '~/data/sourceData';
import { Form, useLoaderData, useNavigate, useNavigation, useRevalidator, useSubmit} from '@remix-run/react';
import Grid from '@mui/material/Grid';
import { Backdrop, Badge, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle, Fab, FormControl, FormControlLabel, FormHelperText, InputBase, InputLabel, List, ListItem, ListItemText, MenuItem, Select, SelectChangeEvent, Switch, TextField, ToggleButton, ToggleButtonGroup, alpha } from '@mui/material';
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

    const url = new URL(request.url);
    const search = url.searchParams.get("search");

    let page = params.page as string;
    const product = await getProducts(search?.toString(),parseInt(page));    
    return json({
      product: await product.json(),
      params: search,
    });
  
}

export default function Productadd() {

  const loadData = useLoaderData < typeof loader > ();  
  const [pagination, setPagination] = React.useState(loadData.product.result.pagination);
  const navigate = useNavigate();
  const navigates = () => {
    navigate("/sales");
  };

  console.log(loadData);

  const changePage = (page: number) => {
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
  const submit = useSubmit();
  const [open, setOpen] = React.useState(false);
  const [openProduct, setOpenProduct] = React.useState({});
  const [qty, setQty] = React.useState(1);
  const [badges, setBadges] = React.useState(0);
  const [attributes, setAttributes] = React.useState({});
  const [attributesID, setAttributID] = React.useState(0);
  const [attributesDetail, setAttributesDetails] = React.useState(0);

  const AddToCart = async (item :any) => {
    
    let oldcart = JSON.parse(localStorage.getItem('cart') || '{}');
    let cart = [];

    // fill attributes if select attributes
    if (setAttributes.length > 0 && attributesID > 0 && attributesDetail > 0) {
      Object.assign(item, { attribute: [{attribute_id:attributesID,value:attributesDetail}] })

      const attr:any = attributes;

      attr[0].data.map((vv :any)=>{
        if (vv.product_attributes_detail_id == attributesDetail) {
          Object.assign(item, { attribute_name: attr[0].name+" : "+vv.name })
          Object.assign(item, { pidr: parseFloat(vv.price) })
          Object.assign(item, { pidr_string: vv.price_string })
        }
      })
    }

    // update cart
    if (oldcart?.length > 0) {

        // Update cart
        oldcart.map((e:any)=>{
          cart.push(e);
        })

        Object.assign(item, { qty_checkout: qty });
        cart.push(item);

    }else{

        // Add new cart
        Object.assign(item, { qty_checkout: qty });
        cart.push(item);

    }

    setBadges(cart.length); // update badges cart
    localStorage.setItem("cart",JSON.stringify(cart)); // set cart
    setAttributID(0); // reset value
    setAttributes({}); // reset value
    setAttributesDetails(0); // reset value
    handleClose();
  }

  const qtyInput = (v: any) => {
    setQty(v)    
  }

  const handleClickOpen = (product :any) => {
    setOpen(true);
    setOpenProduct(product);
    setAttributes(product.attributes)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AddProduct = (attr : any) => {
    
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
                float:'left'
              }}
            >

              {
                (attr.length > 0 ? <FormControl sx={{ marginTop: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">{attr[0].name}</InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={attributesDetail}
                    label="Age"
                    onChange={(e,v :any)=>{
                      // console.log(v.props.value);
                      let val_attr = v.props.value;
                      setAttributesDetails(val_attr);
                      setAttributID(attr[0].id)
                    }}
                  >
                    {
                      attr[0].data.map((es : any) => {
                        return <MenuItem value={es.product_attributes_detail_id}>{es.name + " - " +es.price_string}</MenuItem>
                      })
                    }
                  </Select>
                  <FormHelperText>Choose Attributes</FormHelperText>
                </FormControl>:"")
              }
              

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
  
  const searchProduct = (v: any) => {

    console.log("search "+v);
    const formData = new FormData();
    formData.append("search",v);
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

  const [alignment, setAlignment] = React.useState('grid');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
    ) => {
      setAlignment(newAlignment);
      console.log(newAlignment);
      
    };

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

                <div>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                  >
                    <ToggleButton value="grid"><Icon>grid_on</Icon></ToggleButton>
                    <ToggleButton value="list"><Icon>view_list</Icon></ToggleButton>
                  </ToggleButtonGroup>
                </div>

                <Search>
                  <SearchIconWrapper>
                    <Icon>search</Icon>
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onKeyUp={(e) => {
                      if (e.key === "Enter") {
                        searchProduct((e.target as HTMLInputElement).value)
                        e.preventDefault();
                      }
                    }}
                    defaultValue={loadData.params}
                  />
                </Search>

            </Grid>
        </Grid>
                    
          {loadData.product.result.data.length && alignment == 'grid'? (
              <Grid container xs={12} spacing={2}>
                {loadData.product.result.data.map((item: any) => (
                  <Grid item xs={12} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            action={
                            <IconButton aria-label="settings">
                                <Icon>more_vert</Icon>
                            </IconButton>
                            }
                            title={item.nama_produk}
                            subheader={"Rp"+numberWithCommas(item.pidr)}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={item.imageList}
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
            ) : (alignment == 'grid' ? 
              <p>
                <i>No Product</i>
              </p>
            :"")}

          {loadData.product.result.data.length && alignment == 'list'?(
              <Grid container xs={12} lg={12} spacing={2}>
                <List sx={{ width: '100%', maxWidth: 1500 }}>
                  {loadData.product.result.data.map((item: any) => (
                      <ListItem
                      sx={{margin:"1em"}}
                      key={item.nama_produk}
                      disableGutters
                      secondaryAction={
                        <IconButton onClick={()=>{
                          // AddToCart(item)
                          handleClickOpen(item)
                        }} aria-label="add to favorites">
                        <Icon>add_shopping_cart</Icon>
                        </IconButton>
                      }
                    >
                      <ListItemText primary={`${item.nama_produk}`} />
                      <ListItemText primary={``} />
                      <ListItemText primary={`${"Rp"+numberWithCommas(item.pidr)}`} sx={{textAlign:'right'}}/>

                    </ListItem>
                  ))}
                </List>
              </Grid>
              
            ) : (alignment == 'list' ? 
            <p>
              <i>No Product</i>
            </p>
          :"")}

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

        {AddProduct(attributes)}

    </div>
    
  );
}

export async function action({ request }: ActionFunctionArgs) {
  console.log("action function in sales add");
  const body = await request.formData();
  const search = String(body.get("search"));
  if (search != "") {
    return redirect("/sales/add/1?search="+search);
  }
  

  return true;

}

function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}