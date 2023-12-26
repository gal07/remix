import * as React from 'react';
import {redirect, type LoaderFunctionArgs, json} from "@remix-run/node";
import {useLoaderData, Outlet, useNavigate, Form, useNavigation} from "@remix-run/react";
import {getUsers, getProduct, createTransaction} from '~/data/sourceData';
import type {ActionFunctionArgs, MetaFunction, SessionData}
from "@remix-run/node";
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
import {useSubmit} from "@remix-run/react";
import Input from '@mui/material/Input';
import {FormEvent} from 'react';
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Snackbar, Alert} from '@mui/material';
import {commitSession, getSession, requireUserSession} from '~/sessions';

export async function loader({request} : LoaderFunctionArgs) {

    await requireUserSession(request);

    const session = await getSession(request.headers.get("Cookie"));
    const storageSessions = (session.has('voucher') ? session.get("voucher"):{});     
    const message = (session.has('message') ? session.get("message"):null);
    const alert = (session.has('alert') ? session.get("alert"):null);  
    const object = (session.has('object') ? session.get("object"):null);                          
    const users = await getUsers();
    
    return json({
        users: await users.json(),
        sessions: storageSessions,
        message: message,
        alert: alert,
        object: object,
    }, {
        headers: {
            "Set-Cookie": await commitSession(session)
        }
    });

}
// Action to handle form submission
export async function action({request} : ActionFunctionArgs) {

    const session = await getSession(request.headers.get("Cookie"));
    const body = await request.formData();
    const type = String(body.get("type"));

    if (request.method == "POST") {

        if (type == "checkout") {
            const checkout = String(body.get("checkout"));
            const response = await createTransaction(checkout);

            if (response.meta.code != 200) {

                session.flash("message",response.meta.message);
                session.flash("alert",0);

            } else {
                session.flash("act","order_complete");
                return redirect('/order/' + response.data.id,
                {
                    headers:{
                        "Set-Cookie": await commitSession(session)
                    }
                });
            }
        }

        if (type == "check_voucher") {
          const checkout = String(body.get("checkout"));
          const response = await createTransaction(checkout);
          
          if (response.meta.code != 200) {
            
            session.flash("message",response.meta.message);
            session.flash("alert",0);

          } else {
            
              session.flash("object",response.data)
              session.flash("message","Voucher apllied.");
              session.flash("alert",1);

              return redirect('/sales',{
                headers: {
                    "Set-Cookie": await commitSession(session)
                }
            });
            }
        }

    }

    return redirect('/sales',{
      headers: {
          "Set-Cookie": await commitSession(session)
      }
    });
}

export const meta: MetaFunction = () => {

    return [
        {
            title: "ECCS POS - Sales"
        }, {
            name: "description",
            content: "Welcome to eccs-pos!"
        }
    ];

};

function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function index(props :boolean = false) {

    const [cart, setCart] = React.useState({});
    const [total, setTotal] = React.useState(0);
    const [discount, setDiscount] = React.useState(0);
    const [delCart, setDeleteCart] = React.useState(0);
    const [triggerUse, settriggerUse] = React.useState(props);
    const [snack, setSnack] = React.useState(false);
    const myusers = useLoaderData < typeof loader > ();
    console.log(myusers);
    

    React.useEffect(() => {
        console.log("use effec sales load");

        // collect cart product
        let getData = JSON.parse(localStorage.getItem("cart") || '{}');
        let UpdateData: any[] = [];

        // Update Cart
        if (getData instanceof Array) {

            getData.map((val, idx, []) => {

                if (val.idproduk != delCart) {
                    UpdateData.push(val);
                }

            });

            // collect voucher value
            if (myusers.object != null) {
                let obj = myusers.object;
                (obj.voucher ? 
                    localStorage.setItem("voucher",JSON.stringify(obj.voucher))
                :"")
            }

            localStorage.removeItem("cart");
            localStorage.setItem("cart", JSON.stringify(UpdateData));

        }

        // Retrieve Cart
        let data = JSON.parse(localStorage.getItem("cart") || '{}');
        if (data instanceof Array) {

            let data = JSON.parse(localStorage.getItem("cart") || '{}');
            
            let dtprod: {
                product_name: any;
                price: any;
                qty: any;
                total: any;
            }[] = [];
            let getTotal = 0;

            data.map((val : any, idx : any, []) => {

                let opsdata = {
                    "product_name": val.nama_produk,
                    "price": val.pidr_string,
                    "qty": val.qty_checkout,
                    "total": parseInt(val.pidr) * parseInt(val.qty_checkout)
                };

                getTotal += parseInt(val.pidr) * parseInt(val.qty_checkout);
                dtprod.push(opsdata);

            });

            let finalGetdiscount = 0
            let getVoucher = JSON.parse(localStorage.getItem("voucher") || '0');
            
            if (getVoucher?.voucher_type) {
                switch (getVoucher.voucher_type) {
                    case "percent":
                        finalGetdiscount = getTotal * parseInt(getVoucher.value_total) / 100;
                        break;
                    default:
                        break;
                }
            }
            
            setCart(data);
            setTotal(getTotal);            
            setDiscount(finalGetdiscount);

        }

        if (cart) {
            handleOpenSnack();
        }

    }, [triggerUse,myusers])

    const handleCloseSnack = () => {
      setSnack(false);
    }

    const handleOpenSnack = () => {
      setSnack(true);
    }

    const deleteCart = (e : any) => {
        setDeleteCart(e);
        (
            triggerUse ? settriggerUse(false): settriggerUse(true)
        )
    }

    const TableProductCheckout = (
        data : Object,
        total : any,
        discount : any,
        deleteCart : any
    ) => {
    
        let dtprod: {
            product_name: any;
            attribute_name: any;
            price: any;
            qty: any;
            total: any;
        }[] = [];
        if (data instanceof Array) {
            data.map((val, idx, []) => {
                let opsdata = {
                    "idproduk": val.idproduk,
                    "product_name": val.nama_produk,
                    "attribute_name": val.attribute_name? val.attribute_name:null,
                    "price": val.pidr_string,
                    "qty": val.qty_checkout,
                    "total": parseInt(val.pidr) * parseInt(val.qty_checkout)
                };
                dtprod.push(opsdata);
            });
        }
    
        // Alert Dialog
        const [openAlert, setOpenAlert] = React.useState(false);
        const [productTarget, setProductTarget] = React.useState(0);
        const handleClickOpenAlert = (e : any) => {
            setOpenAlert(true);
        }
        const handleCloseAlert = (e : any) => {
            setOpenAlert(false);
        }
        const handleSubmitDelCart = (e : any) => {
            e.preventDefault();
            deleteCart(productTarget);
            handleCloseAlert(e);
        }
    
        return (
    
            <div> 
                {/* Checkout item list section */}
                <Box sx = {{marginTop:"1em",textAlign:"center"}} > <Typography gutterBottom = {true} variant = "h4" component = "h4" > Checkout</Typography></Box>
                <Box> 
                    < TableContainer component = {Paper} > 
                        <Table sx = {{ minWidth: 650,width:"100%" }} aria-label = "simple table" > 
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell> List Item</TableCell>
                                    < TableCell align = "right" > Price</TableCell>
                                    < TableCell align = "right" > Quantity</TableCell>
                                    < TableCell align = "right" > Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody> 
                                {dtprod.map((row : any) => (< TableRow key = {row.product_name} sx = {{ '&:last-child td, &:last-child th': { border: 0 } }} > <TableCell component = "th" scope = "row" > <Stack spacing = {1} direction = {"row"} > 
                                <Button onClick = {() => {
                                    handleClickOpenAlert("delete")
                                    setProductTarget(row.idproduk)
                                }}
                                color = 'error' size = 'small' variant = "contained" > <Icon> delete</Icon></Button> 
                                {/* < Button onClick = {
                                    () => {
                                        handleClickOpenAlert("edit")
                                    }
                                }
                                size = 'small' variant = "contained" > <Icon> edit</Icon></Button> */}
                                </Stack></TableCell>
                                < TableCell component = "th" scope = "row" > {row.product_name+ (row.attribute_name ? " - "+row.attribute_name:"")}</TableCell>
                                < TableCell align = "right" > {row.price}</TableCell>
                                < TableCell align = "right" > {row.qty}</TableCell>
                                < TableCell align = "right" > Rp.{numberWithCommas(row.total)}</TableCell></TableRow>))}
                            </TableBody>
                        </Table>
                    </TableContainer> 
                    
                    < Stack useFlexGap flexWrap = "wrap" direction = {"row"} sx = {{bgcolor:"#1976d2",color:"white"}} >
                        <Grid xs = {6} md = {6} lg = {6} > 
                            <Box>
                                < Typography margin = {"0.5em"} textAlign = {"left"} gutterBottom = {true} variant = "caption" component = "h5" > Total Before Discount</Typography>
                                < Typography margin = {"0.5em"} textAlign = {"left"} gutterBottom = {true} variant = "caption" component = "h5" > Discount </Typography>
                                < Typography margin = {"0.5em"} textAlign = {"left"} gutterBottom = {true} variant = "h5" component = "h5" > Total</Typography>
                            </Box>
                        </Grid> 
                        < Grid xs = {6} md = {6} lg = {6} > 
                            <Box>
                                < Typography margin = {"0.5em"} textAlign = {"right"} gutterBottom = {true} variant = "caption" component = "h5" > Rp.{numberWithCommas(total)}</Typography>
                                < Typography margin = {"0.5em"} textAlign = {"right"} gutterBottom = {true} variant = "caption" component = "h5" > Rp.{numberWithCommas((discount? discount:0))}</Typography>
                                < Typography margin = {"0.5em"} textAlign = {"right"} gutterBottom = {true} variant = "h5" component = "h5" > Rp.{ numberWithCommas(total - (discount? discount:0))}</Typography>
                            </Box>
                        </Grid>
                    </Stack>
                </Box> 
                {/* Alert Dialog */}
                <Dialog open = {openAlert} onClose = {handleCloseAlert} aria-labelledby = "alert-dialog-title" aria-describedby = "alert-dialog-description" > 
                    <DialogTitle id = "alert-dialog-title" > {"Delete Product from cart"}</DialogTitle>
                     <DialogContent> 
                        <DialogContentText id = "alert-dialog-description" > Remove this product from your cart,are you agree ? </DialogContentText>
                     </DialogContent>
                     <DialogActions> 
                        <Button onClick = {handleCloseAlert}> Disagree</Button> 
                            <Form onSubmit = {(e) => {handleSubmitDelCart(e)}}>
                                <Button type = 'submit' autoFocus > Agree</Button>
                            </Form>
                    </DialogActions>
                </Dialog>
            </div>
    
        );
    
    }

    const TableTotalCheckout = () => {

        const submit = useSubmit();
        const [customer, setCustomer] = React.useState(0);
        const [voucher, setVoucher] = React.useState("");
        const myusers = useLoaderData < typeof loader > ();
        const users = myusers.users.result.map((record: any) => {
                return {
                    label: (
                        record.nama_lengkap != null
                            ? record.nama_lengkap
                            : "No name"
                    ),
                    id: record.id
                }
        });
        const onTagsChange = (event: any, values: any) => {
            setCustomer(values.id)
        }
        const filterOptions = createFilterOptions(
            {ignoreCase: true, matchFrom: "start"}
        );
        const paymentList = [
            { label: 'Cash', id: 1 },
        ]
    
        async function handleSubmit(
          event: FormEvent<HTMLFormElement>,
          data : any,
          type : string,
          option : any
        ) {
    
            event.preventDefault() // this will prevent Remix from submitting the form
            
            let length = data.length
                ? data
                : false;
            if (length == false) {
                alert("cart is empty");
                return false;
            }
    
            // preparing data to checkout
            let checkoutData = {
                customer_id: customer,
                cart: [],
                type: type
            }
    
    
            data.map((product
            : any) => {
                let ready = {
                    product_id: product.idproduk,
                    qty: parseInt(product.qty_checkout),
                    attribute: (product.attribute ? product.attribute:[]),
                    attribute_note: ""
                };
                checkoutData
                    .cart
                    .push(ready);
            })
    
            if (type == "check_voucher") {
                Object.assign(checkoutData, { use_voucher: 1,voucher_code: voucher})
            }
    
            const formData = new FormData();
            formData.append("checkout", JSON.stringify(checkoutData));
            formData.append("type", type);
            submit(formData, {
                action: "/sales",
                method: "post",
                encType: "application/x-www-form-urlencoded",
                preventScrollReset: false,
                replace: false,
                relative: "route"
            });
    
        }
    
        return (
            <div> 
                < Stack direction = "column" justifyContent = "space-around" alignItems = "stretch" spacing = {0.5} sx = {{marginTop:"4.5em"}} > <Box bgcolor = {"#f7f7f7"} > 
                    <Stack useFlexGap flexWrap = "wrap" direction = {"row"} > 
                        <Grid xs = {6} md = {6} lg = {6} > 
                            <Box> 
                                < Typography margin = {"0.5em"} textAlign = {"left"} gutterBottom = {true} variant = "h5" component = "h5" > Total </Typography>
                            </Box>
                        </Grid>
                        < Grid xs = {6} md = {6} lg = {6} >
                            <Box>
                                < Typography margin = {"0.5em"} textAlign = {"right"} gutterBottom = {true} variant = "h5" component = "h5" > Rp.{ numberWithCommas(total - (discount? discount:0))}</Typography>
                            </Box>
                        </Grid> 
                        < Grid xs = {12} md = {12} lg = {12} > 
                            <Box> 
                                < Autocomplete freeSolo = {true} disablePortal id = "combo-box-demo" filterOptions = {filterOptions} options = {users} sx = {{ width: 300}}
                                renderInput = {
                                    (params) => <TextField sx = {{margin:"0.5em" }}{
                                        ...params
                                    }
                                    label = "Customer" />
                                }
                                onChange = {
                                    onTagsChange
                                } />
                            </Box>
                        </Grid>
                        < Grid xs = {12} md = {12} lg = {12} > 
                            <Form method = "POST" onSubmit={(e) => {
                                handleSubmit(e, cart, "check_voucher",false)
                            }}>
                                <Box> 
                                    < TextField variant = "outlined" sx = {{margin:"0.5em"}}
                                    id = "outlined-required" label = "Voucher" defaultValue = {voucher} style = {{color:"white"}}
                                    onKeyUp={(e: any)=>{
                                        let v = (e.target as HTMLInputElement).value;
                                        setVoucher(v);                
                                    }}
                                    />
                                
                                    <Button type='submit' sx={{alignContent:"flex-start",marginTop:"1em"}} size="large">Use</Button>
                                </Box >
                            </Form>
                        </Grid>
                        < Grid xs = {12} md = {12} lg = {12} > 
                            < Autocomplete freeSolo = {true} disablePortal id = "combo-box-demo" filterOptions = {filterOptions} options = {paymentList} sx = {{ width: 300}}
                                renderInput = {
                                    (params) => <TextField sx = {{margin:"0.5em" }}{
                                        ...params
                                    }
                                    label = "Payment" />
                                }
                                onChange = {
                                    onTagsChange
                            } />
                        </Grid> 
                < Divider variant = "middle" /> 
                <Grid xs = {12} md = {12} lg = {12} >
                    <Box sx = {{margin:"0em",marginTop:"0.5em"}} > 
                        <Form method = "POST" action = 'checkout' onSubmit = {
                        (e) => {
                            handleSubmit(e, cart, "checkout",false)
                        }
                        } > 
                            <Input type = "hidden" size = 'small' name = "email" id = "email" defaultValue = "wasdas@asdas.com" />
                                <Button type = "submit" size = {"large"} fullWidth = {true} variant = "contained" color = "success" > Pay</Button>
                        </Form>
                    </Box>
                </Grid>
             </Stack>
             </Box>
             </Stack>
            </div>
        );
    
    }

    return (
        < div style = {{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }} > 
        <Grid container spacing = {2}
        sx = {{marginTop:"0.5em",width:"100%",height:"100%"}} > <Grid item xs = { 12} md = {8}lg = {8} > {
            TableProductCheckout(cart, total, discount, deleteCart)
        }</Grid> < Grid item xs = {12} md = {4}lg = {4} > {
            TableTotalCheckout()
        }</Grid> {
            AddProduct()
        }</Grid>

        {( myusers.message != null ? 
            <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar   anchorOrigin={{ vertical:"bottom", horizontal:"center" }} open={snack} autoHideDuration={6000} onClose={handleCloseSnack}>
            <Alert variant='filled' onClose={handleCloseSnack} severity={(myusers.alert && myusers.alert == 1 ? "success":"error")} sx={{ width: '100%' }}>
                {(myusers.message && myusers.message != null ? myusers.message:"")}
            </Alert>
            </Snackbar>
        </Stack>:""
        )}
        

        </div>
    );

}



const AddProduct = () => {
    const navigate = useNavigate();
    const handleClickOpen = () => {
        navigate("add/1");
    };

    return (

        <div> 
          < Box sx = {{ '& > :not(style)': { m: 1 } }} > 
              <Fab sx = {{
                position: "fixed",
                bottom: (theme) => theme.spacing(2),
                right: (theme) => theme.spacing(2)
              }}
          color = "primary" aria-label = "add" onClick = {
              handleClickOpen
          }> <Icon> add</Icon></Fab>
          </Box>
        </div>

    );

}