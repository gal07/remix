import { Search } from "@mui/icons-material";
import { Backdrop, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormHelperText, Grid, Icon, IconButton, InputBase, InputLabel, MenuItem, Pagination, Select, Stack, TextField, Typography, alpha, styled } from "@mui/material";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, useRevalidator } from "@remix-run/react";
import React from "react";
import { getProducts } from "~/data/sourceData";
import { commitSession, getSession, requireUserSession } from "~/sessions";

export const loader = async ({request} : LoaderFunctionArgs) => {

    await requireUserSession(request);
    
    const session = await getSession(request.headers.get("Cookie"));
    const secret = (session.has('keySec') ? session.get("keySec"):null);

    return json({
        secret: secret,
        product: ""
    }, {
        headers: {
            "Set-Cookie": await commitSession(session)
        }
    });

};

export default function addProduct () {

    const loadata = useLoaderData < typeof loader > ();
    const revalidator = useRevalidator();
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
    const [myproduct, setMyProduct] = React.useState<any | any>([]);
    const [totalPage, setTotalPage] = React.useState<any | any>();
    const [page, setpage] = React.useState<any | any>(1);
    const [loading, setLoading] = React.useState<any | any>(true);
    const [open, setOpen] = React.useState(false);
    const [openProduct, setOpenProduct] = React.useState({});
    const [qty, setQty] = React.useState(1);
    const [badges, setBadges] = React.useState(0);
    const [attributes, setAttributes] = React.useState({});
    const [attributesID, setAttributID] = React.useState(0);
    const [attributesDetail, setAttributesDetails] = React.useState(0);
    const [search, setSearch] = React.useState("");

    const AddToCart = async (item :any) => {
      
        let oldcart = JSON.parse(localStorage.getItem('cart') || '{}');
        let cart = [];

        // assign qty total
        Object.assign(item, { qty_checkout: qty });

    
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
            let skip = false;
            let new_prod = false;

            oldcart.map((e:any)=>{

              skip = false;

              // check if same produk ID
              if (item.idproduk === e.idproduk) {
                console.log("same ID produk");
                
                // check if same attribute ID & value
                if (parseInt(item.attribute[0]?.attribute_id) === parseInt(e.attribute[0]?.attribute_id) &&
                 parseInt(item.attribute[0]?.value) === parseInt(e.attribute[0]?.value)) {

                 // then update qty
                 let final_checkout_qty = parseInt(e.qty_checkout) + parseInt(item.qty_checkout);
                 Object.assign(e, { qty_checkout: final_checkout_qty });

                 // push to cart
                 cart.push(e);
                 skip = true;
                 console.log("log push to cart");


                }else{

                  if (skip == false) {
                    console.log("same id produk but different attr");
                    cart.push(item);
                  }
                  
                }

              }else{
                if (skip == false) {
                  console.log("not same");
                  cart.push(item);
                }
                  
              }

              // push to cart
              if (skip == false && new_prod == false) {
                console.log("push cart outside");
                cart.push(e);
              }

            })

            
    
    
        }else{
    
            // Add new cart
            console.log("new cart");
            Object.assign(item, { qty_checkout: qty });
            cart.push(item);
    
        }
        
        console.log("END");
        setBadges(cart.length); // update badges cart
        localStorage.setItem("cart",JSON.stringify(cart)); // set cart
        setAttributID(0); // reset value
        setAttributes({}); // reset value
        setAttributesDetails(0); // reset value
        setQty(1) // reset value
        revalidator.revalidate();
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

      const searchProduct = async (v: any) => {

        console.log("search "+v);
        setSearch(v)
    
      }
    
      React.useEffect(()=>{
        
        (async () => {
            console.log("use efect call");
            let jk = await getProducts(loadata.secret,search,page,12)
            let dataprod :any[] = [];
            jk.data.map((el :any)=>{
                dataprod.push(el)                
            })
            setTotalPage(jk.pagination.total_page);
            setMyProduct(dataprod)
            setLoading(false)
            
        })();
        
      },[search,badges,page])
    

    return(
        <div>
            <Box sx = {{marginTop:"1em",textAlign:"center"}} > <Typography gutterBottom = {true} variant = "h4" component = "h4" >&nbsp;</Typography></Box>
            <div style={{marginLeft:"1em"}}>
                <Box boxShadow={2}>
                    
                    {/* content product */}
                    <Grid container sx={{margin:"0.5em"}} xs={12} md={12} lg={12}>


                        <Grid item xs={12} md={12} sx={{
                            marginBottom:"1em",
                            marginLeft:"-1em",
                            minWidth:{sx: "34ch",md: "97ch"}
                        }}>
                            <Search>
                                <SearchIconWrapper>
                                    <Icon>search</Icon>
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    onKeyUp={(e :any) => {
                                        if (e.key === "Enter") {
                                            searchProduct((e.target as HTMLInputElement).value)
                                            e.preventDefault();
                                        }
                                    
                                    }}
                                    // defaultValue={}
                                />
                            </Search>
                        </Grid>

                        {
                            loading == true ? 
                            <Grid item xs={12} md={12}>
                                <Stack alignItems="center">
                                    <CircularProgress />
                                </Stack>
                            </Grid>:
                            myproduct.map((item: any) => (
                                <Grid item xs={6} md={2} lg={2} sx={{
                                    textAlign:"center",
                                }}>
                                    <div onClick={()=>{
                                        handleClickOpen(item)
                                    }}>
                                        <Box 
                                        boxShadow={1} 
                                        sx={{
                                            // margin:"0.2em",
                                            // width:"10ch",
                                            // backgroundColor:"orangered"
                                            alignItems:"center",
                                            padding:"1em"
                                        }}>
                                            <Box
                                            component="img"
                                            sx={{
                                                maxHeight: { xs: 60, md: 100 },
                                                maxWidth: { xs: 350, md: 250 },
                                                // backgroundColor:"yellow"
                                            }}
                                            alt={item.nama_produk}
                                            src={item.imageList}
                                            />

                                            <Typography noWrap variant="body2" fontSize={10}>
                                                {item.nama_produk}
                                            </Typography>
                                            <Typography variant="caption">
                                                {item.pidr_string}
                                            </Typography>

                                        </Box> 
                                    </div>      
                                </Grid>
                            ))
                        }

                        <Grid item xs={12} md={12}>
                            <Stack spacing={3} sx={{alignItems:"center",margin:"2em"}}>
                                <Pagination 
                                    count={totalPage} 
                                    showFirstButton 
                                    showLastButton
                                    onChange={(e,value)=>{
                                        setpage(value)
                                        setSearch("")
                                        setLoading(true)
                                    }}
                                    variant="outlined" 
                                    shape="rounded"
                                />
                            </Stack>
                        </Grid>

                    </Grid>

                </Box>
            </div>
            {AddProduct(attributes)}
        </div>
    );
}