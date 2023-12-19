import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";
import { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import {useMatches, useLoaderData} from "@remix-run/react";
import { getProducts, getTransaction } from "~/data/sourceData";
import { getSession } from "~/sessions";
import invariant from "tiny-invariant";

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
  
    // Get Specific order
    invariant(params.Idorder, "Missing Idorder param");
    let idorder:number = parseInt(params.Idorder!); 
    const getOrder = await getTransaction(idorder);
    return json({getOrder});
    
}

 // Action to handle form submission
 export async function action({ request }: ActionFunctionArgs) {
  
 }

export default function index(){

    const order = useLoaderData < typeof loader > ();

    const TAX_RATE = 0.07;

    function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
    }

    function priceRow(qty: number, unit: number) {
    return qty * unit;
    }

    function createRow(desc: string, qty: number, unit: number) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
    }

    interface Row {
        desc: string;
        qty: number;
        unit: number;
        price: number;
    }

    function subtotal(items: readonly Row[]) {
        return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    }

    const rows = [
        createRow('Paperclips (Box)', 100, 1.15),
        createRow('Paper (Case)', 10, 45.99),
        createRow('Waste Basket', 2, 10000),
    ];

    const invoiceSubtotal = subtotal(rows);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;
    const date = new Date(order.getOrder.data?.tanggal);

    let dtprod: { product_name: any; price: any; qty: any; total: any; }[] = [];
    if (order.getOrder.data.detail instanceof Array) {
        order.getOrder.data.detail.map((val : any, idx : any, []) => { 
        let opsdata = {
            "product_name":val.nama,
            "price":val.harga,
            "qty":val.qty,
            "total":parseInt(val.harga)*parseInt(val.qty),
        };
        dtprod.push(opsdata);
        });
    }
          
    return(
        <div>
            <TableContainer sx={{
                marginTop:"2em"
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
                            <TableCell>Payment : {order.getOrder.data.payment_method}</TableCell>
                        </TableRow>
                    
                    </TableBody>
                    </Table>
                </div>
            </TableContainer>
            <TableContainer sx={{marginTop:"1em",marginBottom:"3em"}} component={Paper}>
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
                            <TableCell>{row.product_name}</TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{ccyFormat(row.total)}</TableCell>
                        </TableRow>
                        ))}
                        <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">{order.getOrder.data.total_barang}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>Discount</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">{order.getOrder.data.voucher_nominal}</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{order.getOrder.data.total}</TableCell>
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