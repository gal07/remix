import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography, Grid, List, Stack, Breadcrumbs } from "@mui/material";
import { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import {useMatches, useLoaderData, Link, useNavigate, NavLink} from "@remix-run/react";
import { getProducts, getTransaction } from "~/data/sourceData";
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
    return json({
        getOrder: await getOrder,
        flash: flash
    }, {
        headers: {
            "Set-Cookie": await commitSession(session)
        }
    });
    
}

// Action to handle form submission
export async function action({ request }: ActionFunctionArgs) {
  
}

export default function index(){

    const order = useLoaderData < typeof loader > ();
    const date = new Date(order.getOrder.data?.tanggal);
    const navigate = useNavigate();

    console.log(order.getOrder);
    
    React.useEffect(()=>{
        if (order?.flash) {
            if (order.flash == "delete_cart") {
                localStorage.removeItem("cart");
                localStorage.removeItem("voucher");
            }
        }
    })

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
                

                <Grid item xs={12} lg={8}>
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
                                <TableCell>Date : {date.getDate()+" - "+date.getMonth()+" - "+date.getFullYear()}</TableCell>
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

                <Grid item xs={12} lg={4}>
                    <TableContainer sx={{
                    marginTop:"0em"
                }} component={Paper}>
                    <div hidden={(order.getOrder.meta.code != 200 ? true:false)}>
                        <Table sx={{ minWidth: 100 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                            <TableCell align="left" colSpan={3}>
                                How to pay ?
                            </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        
                            {(order.getOrder.data.payment.type == "img" ? 
                            <TableRow>
                                <TableCell><img style={{ width: "50%" ,"textAlign":"center"}} src={order.getOrder.data.payment.payment_link}/>
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
                </Grid>

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
        </div>
    );
}

function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}