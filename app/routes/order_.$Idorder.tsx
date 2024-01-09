import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography, Grid, List, Stack, Breadcrumbs, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, createFilterOptions, Autocomplete, SelectChangeEvent, FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";
import { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction, json, redirect } from "@remix-run/node";
import {useMatches, useLoaderData, Link, useNavigate, NavLink, useSubmit} from "@remix-run/react";
import { changePayment, getPayments, getProducts, getTransaction, simulatePay } from "~/data/sourceData";
import invariant from "tiny-invariant";
import {commitSession, getSession, requireUserSession} from '~/sessions';
import React from "react";

export const meta: MetaFunction = () => {

    return [
      { title: "ECCS POS - Order " },
      { name: "description", content: "Welcome to eccs-pos!" },
    ];
  
  };

export async function loader({
    params,
    request
  }: LoaderFunctionArgs) {
  
    await requireUserSession(request);
    const session = await getSession(request.headers.get("Cookie"));
    if (session.has("act")) {
        if (session.get("act") == "order_complete") {
            session.flash("act","delete_cart");
        }
    }
    const flash = (session.has('act') ? session.get("act"):null);       
    const secret = (session.has('keySec') ? session.get("keySec"):null);


    // Get Specific order
    invariant(params.Idorder, "Missing Idorder param");
    let idorder:number = parseInt(params.Idorder!); 
    const getOrder = await getTransaction(secret,"",1,10,idorder);
    const payment = await getPayments(secret?.toString());
    
    return json({
        getOrder: await getOrder,
        payment: await payment.json(),
        flash: flash
    }, {
        headers: {
            "Set-Cookie": await commitSession(session)
        }
    });
    
}

// Action to handle form submission
export async function action({ request }: ActionFunctionArgs) {
  

    const session = await getSession(request.headers.get("Cookie"));
    const secret = (session.has('keySec') ? session.get("keySec"):null);
    const body = await request.formData();
    const type = String(body.get("type"));
    console.log(type);
    
    if (request.method == "POST") {

        if (type == "change_payment") {
            
            const id = body.get("id");
            const data = body.get("data");
            const changePay = await changePayment(data,secret);
            if (changePay.meta.code != 200) {
                console.log(changePay);
            }

            return redirect('/order/'+id,{
                headers: {
                    "Set-Cookie": await commitSession(session)
                }
            });
        }

        if (type == "simulate_pay") {
            
            const id = body.get("id");
            const data = body.get("data");
            const simulate = await simulatePay(data,secret);
            if (simulate.meta.code != 200) {
                console.log(simulate);
            }

            setTimeout(() => {
                return redirect('/order/'+id);
            }, 2000);

            
        }

    }

    return true;

}

export default function index(){

    const order = useLoaderData < typeof loader > ();
    const submit = useSubmit();
    const [paymentList, setPaymentList] = React.useState<[] | any>();
    const [keyPaymentList, setKeyPaymentList] = React.useState<[] | any>();
    const [open, setOpen] = React.useState(false);
    const [changPayment, setchangPayment] = React.useState("");
    
    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();
    
    React.useEffect(()=>{

        if (order?.flash) {
            if (order.flash == "delete_cart") {
                localStorage.removeItem("cart");
                localStorage.removeItem("voucher");
            }
        }
            
         // retrieve Payment List
         let key_temp: { id: any;key: any;label:any;}[] = [];
         let val_temp: { label: any;id: any;}[] = [];
         if (order.payment?.result.data) {
             let pylist = order.payment?.result.data;
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

    },[])


    let dtprod: {
        attribute: any; product_name: any; price: any; qty: any; total: any; 
    }[] = [];
    if (order.getOrder.data.detail instanceof Array) {
        order.getOrder.data.detail.map((val : any, idx : any, []) => { 
        let opsdata = {
            "product_name":val.nama,
            "price":val.harga,
            "qty":val.qty,
            "total":parseInt(val.harga)*parseInt(val.qty),
            "attribute": val.attribute ? val.attribute : []
        };
        dtprod.push(opsdata);
        });
    }

    const filterOptions = createFilterOptions(
        {ignoreCase: true, matchFrom: "start"}
    );

    const handleChange = (event: SelectChangeEvent) => {
        setchangPayment(event.target.value as string);
    };

    // Modal change payment
    const simulatePays = () =>{

        const formData = new FormData();
        let data = {
            "order_id":parseInt(order.getOrder.data.id)
        };

        formData.append("id",order.getOrder.data.id);
        formData.append("data",JSON.stringify(data));
        formData.append("type","simulate_pay");

        submit(formData, {
            action: "/order/"+order.getOrder.data.id,
            method: "POST",
            preventScrollReset: false,
            replace: false,
            relative: "route",
        });

    }

    const handleSubmit = (e :any) =>{

        e.preventDefault();

        let dt_cp = {
            "order_id": order.getOrder.data.id,
            "payment_key": "E-WALLET",
            "payment_name": "QRIS",
            "payment_code": "1_xendit",
            "cash_payment": order.getOrder.data.total
        };

        keyPaymentList.map((e: any) => {
            
            if (e.label == changPayment) {   
                dt_cp.payment_key =  e.key;
                dt_cp.payment_name = changPayment;
                dt_cp.payment_code = e.id;
            }
        })
        
        const formData = new FormData();
        formData.append("data",JSON.stringify(dt_cp));
        formData.append("id",order.getOrder.data.id);
        formData.append("type","change_payment");
        handleClose()
        submit(formData, {
            action: "/order/"+order.getOrder.data.id,
            method: "POST",
            preventScrollReset: false,
            replace: false,
            relative: "route",
        });

    }
    const modalChangepayment = () => {

        let key_temp: { id: any;key: any;label:any;}[] = [];
        let val_temp: { label: any;id: any;}[] = [];
        if (order.payment?.result.data) {
            let pylist = order.payment?.result.data;
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
        }

        return (
            <Dialog open={open} onClose={handleClose}>
            <Box component={"form"} method="post" onSubmit={handleSubmit} action={"/order/"+order.getOrder.data.id}>
            <DialogTitle>Change Payment</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Change payment, will change your payment method. Please carefully when you changed.
              </DialogContentText>

             <FormControl fullWidth sx={{marginTop:"1em"}}>
                <InputLabel id="demo-simple-select-label">Payment</InputLabel>
                <Select
                name="changePayment"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={changPayment}
                label="Payment"
                onChange={handleChange}
                >
                {
                    val_temp.map((payment : any) => {
                        return <MenuItem value={payment.label}>{payment.label}</MenuItem>
                    })
                }
                </Select>
             </FormControl>

            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" >Change Payment</Button>
            </DialogActions>
            </Box>

          </Dialog>
        );

    }
          
    return(
        <div>
              <Grid container xs={12} lg={12} spacing={2}>

              {(order.getOrder.meta.code == 200 ? 
              <Grid item xs={12} lg={12} sx={{marginTop:"0.5em"}}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <NavLink to={"/order"}>
                            List Order
                        </NavLink>
                        <Typography color="text.primary">{order.getOrder.data.id}</Typography>
                    </Breadcrumbs>
                </Grid>:"")}
                

                <Grid item xs={12} lg={(order.getOrder.data.status != 33 ? 12:8)}>
                    <TableContainer sx={{
                    marginTop:"0em"
                }} component={Paper}>
                    <div hidden={(order.getOrder.meta.code != 200 ? true:false)}>
                        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                            <TableCell align="left" colSpan={3}>
                                Data Order
                            </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Order ID : {order.getOrder.data.id}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>No Invoice : {order.getOrder.data.invoice_no}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Date : {order.getOrder.data?.tanggal}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Name : {order.getOrder.data.nama_pelanggan}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Payment : {order.getOrder.data.payment_method == null ? "Cash":order.getOrder.data.payment_method+" - "+order.getOrder.data.payment.payment_channel}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Status : {(order.getOrder.data.status == 33 ? "Waiting Payment":(order.getOrder.data.status == 5 ? "Completed":"Status unknown"))}</TableCell>
                            </TableRow>
                        
                        </TableBody>
                        </Table>
                    </div>
                    </TableContainer>
                </Grid>

                {order.getOrder.data.status == 33 ? 
                <Grid item xs={12} lg={4}>
                    <TableContainer sx={{
                    marginTop:"0em"
                }} component={Paper}>
                    <div hidden={(order.getOrder.meta.code != 200 ? true:false)}>
                        <Table sx={{ minWidth: 100 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                            <TableCell align="left" colSpan={3}>
                                Payment Method
                            </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        
                            {(order.getOrder.data.payment.type == "img" ? 
                            <TableRow>
                                <TableCell><img style={{ width: "45%" ,"textAlign":"center"}} src={order.getOrder.data.payment.payment_link}/>
                                    <Typography variant="h5" sx={{marginLeft:"1em"}}>{order.getOrder.data.payment.payment_channel}</Typography>
                                </TableCell>
                            </TableRow>
                            :<><TableRow>
                                    <TableCell>Ref Number : {order.getOrder.data.payment.payment_link}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Channel : {order.getOrder.data.payment_method} - {order.getOrder.data.payment.payment_channel}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Typography variant="h6">Please transfer amount of total to ref number.</Typography></TableCell>
                                </TableRow>
                                
                                </>)}

                        </TableBody>
                        </Table>
                    </div>
                    </TableContainer>

                    {order.getOrder.data.status == 33 ? <Stack direction={"row"} sx={{marginTop: "0.5em"}} spacing={1}>
                        <Button variant="contained" color="primary" onClick={handleClickOpen}>Change Payment</Button>
                        <Button variant="contained" color="secondary" onClick={simulatePays}>Simulate Payment</Button>
                    </Stack>:""}
                    

                </Grid>:""}
                

              </Grid>

            
            <TableContainer sx={{marginTop:"1em"}} component={Paper}>
                <div hidden={(order.getOrder.meta.code != 200 ? true:false)}>
                    <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Qty.</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dtprod.map((row) => (
                        <TableRow key={row.product_name}>
                            <TableCell>
                                <Stack direction="column">
                                    <Typography variant="caption">{row.product_name}</Typography>
                                    <Typography variant="caption">{row.attribute[0]["nama_attribute"]}</Typography>
                                </Stack>  
                            </TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">Rp {
                                row.attribute.length > 0 ?  numberWithCommas(row.attribute[0].price) : numberWithCommas(row.price)
                            }</TableCell>
                            <TableCell align="right">Rp {
                                row.attribute.length > 0 ?  numberWithCommas(row.attribute[0].price * row.qty) : numberWithCommas(row.total)
                            }</TableCell>
                        </TableRow>
                        ))}
                        <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">{order.getOrder.data.total_barang_string}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>Discount</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">{order.getOrder.data.voucher_nominal_string}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{order.getOrder.data.total_string}</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </div>
            </TableContainer>


            <div hidden={(order.getOrder.meta.code != 200 ? false:true)}>
                <Typography variant="h3" sx={{textAlign:"center",marginTop:"3em"}}>
                    {order.getOrder.meta.message}
                </Typography>
            </div>

            {/* Modal */}
            {modalChangepayment()}
        </div>
    );
}

function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}