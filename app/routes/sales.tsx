import * as React from 'react';
import {redirect, type LoaderFunctionArgs, json} from "@remix-run/node";
import {useLoaderData, Outlet, useNavigate, Form, useNavigation} from "@remix-run/react";
import {getUsers, getProduct, createTransaction, getPayments, getProducts} from '~/data/sourceData';
import type {ActionFunctionArgs, LinksFunction, MetaFunction, SessionData}
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
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Snackbar, Alert, Backdrop, CircularProgress} from '@mui/material';
import {commitSession, getSession, requireUserSession} from '~/sessions';
import { styled, lighten, darken } from '@mui/system';
import addProduct from '../components/product/addProduct';

export async function loader({request} : LoaderFunctionArgs) {

    await requireUserSession(request);

    const session = await getSession(request.headers.get("Cookie"));
    const storageSessions = (session.has('voucher') ? session.get("voucher"):{});     
    const message = (session.has('message') ? session.get("message"):null);
    const alert = (session.has('alert') ? session.get("alert"):null);  
    const object = (session.has('object') ? session.get("object"):null);  
    const act = (session.has('act') ? session.get("act"):null);
    const secret = (session.has('keySec') ? session.get("keySec"):null);
    const users = await getUsers(secret?.toString());
    const payment = await getPayments(secret?.toString());
    // const product = await getProducts(secret,"",1,12);    
    
    return json({
        users: await users.json(),
        payment: await payment.json(),
        // product: product,
        sessions: storageSessions,
        message: message,
        alert: alert,
        object: object,
        act: act,
        secret: secret
    }, {
        headers: {
            "Set-Cookie": await commitSession(session)
        }
    });

}
// Action to handle form submission
export async function action({request} : ActionFunctionArgs) {

    const session = await getSession(request.headers.get("Cookie"));
    const secret = (session.has('keySec') ? session.get("keySec"):null);
    const body = await request.formData();
    const type = String(body.get("type"));

    if (request.method == "POST") {

        if (type == "checkout") {
            const checkout = String(body.get("checkout"));
            const response = await createTransaction(checkout,secret?.toString());
            
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
          const response = await createTransaction(checkout,secret?.toString());
          
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

        if (type == "delete_voucher") {            
            session.flash("act","delete_voucher")
        }

        if (type == "calling_alert") {
            const type_alert = String(body.get("type_alert"));
            const message_alert = String(body.get("message_alert"));
            session.flash("message",message_alert);
            session.flash("alert",(type_alert == "error" ? 0:1));
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
    const myusers = useLoaderData < typeof loader > ();
    const [cart, setCart] = React.useState({});
    const [total, setTotal] = React.useState<any | any>(0);
    const [discount, setDiscount] = React.useState<any | any>(0);
    const [voucher, setVoucher] = React.useState("");
    const [useVoucher, setuseVoucher] = React.useState(false);
    const [delCart, setDeleteCart] = React.useState(0);
    const [triggerUse, settriggerUse] = React.useState(props);
    const [snack, setSnack] = React.useState(false);
    const [paymentList, setPaymentList] = React.useState<any | any>();
    const [keyPaymentList, setKeyPaymentList] = React.useState<any | any>();
    const [product, setProduct] = React.useState<any | any>(myusers.product);
    const [addProd, setAddProd] = React.useState(false);

    React.useEffect(() => {

        // remove voucher
        if (myusers?.act && myusers?.act == "delete_voucher") {            
            setVoucher("");
            setDiscount(0);
            setuseVoucher(false);
            localStorage.removeItem("voucher");
        }

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

                // set state voucher code
                setVoucher(getVoucher.voucher_code)
                setuseVoucher(true)
                switch (getVoucher.voucher_type) {
                    case "percent":
                        let find = getTotal * parseInt(getVoucher.value_total) / 100;
                        finalGetdiscount = (getVoucher.max_voucher_total > 0 ? (find > getVoucher.max_voucher_total ? getVoucher.max_voucher_total:find):find);
                        break;
                    case "value":
                        finalGetdiscount = parseInt(getVoucher.value_total);                        
                        break;
                    default:
                        break;
                }
            }
            
            setCart(data);
            setTotal(getTotal);            
            setDiscount(finalGetdiscount);

        }

        // retrieve Payment List
        let key_temp: { id: any;key: any;label:any;}[] = [];
        let val_temp: { label: any;id: any;}[] = [];
        if (myusers.payment.result?.data) {
            let pylist = myusers.payment.result.data;
            pylist.map((payment: any)=>{
                payment.value.map((code: any) => {
                    val_temp.push({
                        label:code.name,
                        id:code.code,
                    })
                    key_temp.push({
                        id:code.code,
                        key: payment.key,
                        label: code.name,
                    })
                })
            })
            setPaymentList(val_temp);
            setKeyPaymentList(key_temp);
        }

        if (cart) {
            handleOpenSnack();
        }

    }, [addProd,triggerUse,myusers])

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
                                    <TableCell width={"4ch"}></TableCell>
                                    <TableCell> List Item</TableCell>
                                    {/* < TableCell align = "right" > Price</TableCell>
                                    < TableCell align = "right" > Quantity</TableCell> */}
                                    < TableCell align = "right" > Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody> 
                                {dtprod.map((row : any) => (
                                < TableRow key = {row.product_name} sx = {{ '&:last-child td, &:last-child th': { border: 0 } }} > 
                                <TableCell component = "th" scope = "row" >
                                  <Stack spacing = {1} direction = {"row"} > 
                                    <Button style={{minWidth:"4ch"}} onClick = {() => {
                                        handleClickOpenAlert("delete")
                                        setProductTarget(row.idproduk)
                                    }}
                                    color = 'error' size = 'small' variant = "contained" > X
                                    </Button> 
                                  </Stack>
                                </TableCell>
                                < TableCell component = "th" scope = "row" > 
                                    <Typography variant='body2'>{row.product_name}</Typography>
                                    <Typography variant='caption'>{(row.attribute_name ? " - "+row.attribute_name:"")}</Typography>
                                    <Typography variant='body2'>{row.price} x {row.qty} Pcs</Typography>
                                </TableCell>
                                {/* < TableCell align = "right" > {row.price}</TableCell>
                                < TableCell align = "right" > {row.qty}</TableCell> */}
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
                                < Typography margin = {"0.5em"} textAlign = {"right"} gutterBottom = {true} variant = "caption" component = "h5" > Rp.{numberWithCommas(parseInt(total))}</Typography>
                                < Typography margin = {"0.5em"} textAlign = {"right"} gutterBottom = {true} variant = "caption" component = "h5" > Rp.{numberWithCommas((discount? parseInt(discount):0))}</Typography>
                                < Typography margin = {"0.5em"} textAlign = {"right"} gutterBottom = {true} variant = "h5" component = "h5" > Rp.{ numberWithCommas(parseInt(total) - (discount? parseInt(discount):0))}</Typography>
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

    const TableTotalCheckout = (voucher :any,paymentList :any,keypaymentList: any) => {
  
        const submit = useSubmit();
        const [customer, setCustomer] = React.useState(0);
        const [preText, setPreText] = React.useState(voucher.toString());
        const [UsePayment, setUsePayment] = React.useState("");
        const [UsePaymentName, setUsePaymentName] = React.useState("");

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
        const onTagsChange = (event: any, values: any,reason : any) => {
            if (reason === 'reset') {
                setCustomer(0);
            }
            setCustomer(values.id)
        }
        const filterOptions = createFilterOptions(
            {ignoreCase: true, matchFrom: "start"}
        );

        const handleUsePayment = (event: any, values: any,reason : any) => {

            if (reason === 'clear') {
                setUsePayment("");
                setUsePaymentName("");
            }else{
                setUsePayment(values.id)
                setUsePaymentName(values.label)
            }
                    
        }
               
        async function handleSubmit(
          event: FormEvent<HTMLFormElement>,
          data : any,
          type : string,
          option : any
        ) {
    
            event.preventDefault() // this will prevent Remix from submitting the form
            const formData = new FormData(); // Formdata for fill the data
            
            let length = data.length
                ? data
                : false;
            if (length == false) {
                 // return false;
                formData.append("type","calling_alert");
                formData.append("type_alert","error");
                formData.append("message_alert","Cart is empty");
                submit(formData, {
                    action: "/sales",
                    method: "post",
                    encType: "application/x-www-form-urlencoded",
                    preventScrollReset: false,
                    replace: false,
                    relative: "route"
                });
            }

            if (UsePayment == "") {
                 // return false;
                 formData.append("type","calling_alert");
                 formData.append("type_alert","error");
                 formData.append("message_alert","Choose Payment!");
                 submit(formData, {
                     action: "/sales",
                     method: "post",
                     encType: "application/x-www-form-urlencoded",
                     preventScrollReset: false,
                     replace: false,
                     relative: "route"
                 });
            }
    
            // preparing data to checkout
            let checkoutData = {
                customer_id: customer,
                payment_key: "",
                payment_name: "",
                payment_code: "",
                cash_payment: total,
                cart: [],
                type: type
            }

            // fill payment data
            checkoutData.payment_code = UsePayment;
            checkoutData.payment_name = UsePaymentName;
            keypaymentList.map((e: any) => {
                if (e.label == UsePaymentName) {                    
                    checkoutData.payment_key = e.key;
                }
            })
    
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
                Object.assign(checkoutData, { use_voucher: 1,voucher_code: preText})
            }

            if (useVoucher === true) {
                Object.assign(checkoutData, { use_voucher: 1,voucher_code: voucher})
            }

            formData.append("checkout", JSON.stringify(checkoutData));
            formData.append("type", type);

            // return false;
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
                < Stack direction = "column" justifyContent = "space-around" alignItems = "stretch" spacing = {0.5}> <Box bgcolor = {"#f5f5f5"} > 
                    <Stack useFlexGap flexWrap = "wrap" direction = {"row"} > 
                        < Grid xs = {12} md = {12} lg = {12} > 
                            <Box> 
                                < Autocomplete size="small" freeSolo = {true} disablePortal id = "combo-box-demo" filterOptions = {filterOptions} options = {users} sx = {{ width: 300}}
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
                                handleSubmit(e, cart, (voucher == "" ? "check_voucher":"delete_voucher"),false)
                            }}>
                                <Box>
                                    {(useVoucher === true ? 
                                    < TextField size="small" variant = "outlined" sx = {{margin:"0.5em"}}
                                    id = "outlined-required" label = "Voucher" defaultValue={preText} value={voucher} style = {{color:"white"}}
                                    onChange={(e)=> setPreText(e.target.value)}
                                    />
                                    :
                                    < TextField size="small" variant = "outlined" sx = {{margin:"0.5em"}}
                                    id = "outlined-required" label = "Voucher" defaultValue={preText} style = {{color:"white"}}
                                    onChange={(e)=> setPreText(e.target.value)}
                                    />
                                    )}
                                    
                                
                                    <Button type='submit' sx={{alignContent:"flex-start",marginTop:"1em"}} color={(voucher == "" ? "primary":"error")} size="large">{(voucher == "" ? "Use":"Remove")}</Button>
                                </Box >
                            </Form>
                        </Grid>
                        < Grid xs = {12} md = {12} lg = {12} > 
                            < Autocomplete size="small" freeSolo = {true} disablePortal id = "combo-box-demo" filterOptions = {filterOptions} options = {paymentList} sx = {{ width: 300}}
                                renderInput = {
                                    (params) => <TextField sx = {{margin:"0.5em" }}{
                                        ...params
                                    }
                                    label = "Payment" />
                                }
                                onChange = {
                                    handleUsePayment
                                }
                                 />
                            
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
        <Grid container spacing = {2} sx = {{marginTop:"0.5em",width:"100%",height:"100%"}} > 
            <Grid container xs = {12} md = {6}lg = {5} > 
                <Grid item xs = {12} md = {12}lg = {12} >
                    {TableProductCheckout(cart, total, discount, deleteCart)}
                    {TableTotalCheckout(voucher,paymentList,keyPaymentList)}
                </Grid> 
            </Grid> 

            < Grid container xs = {12} md = {4}lg = {7} >
                <Grid item xs = {12} md = {12}lg = {12} >
                    {addProduct()}
                </Grid>
            </Grid>

        </Grid>

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
