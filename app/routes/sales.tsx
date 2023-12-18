import * as React from 'react';
import {redirect, type LoaderFunctionArgs, json}
from "@remix-run/node";
import {useLoaderData, Outlet,useNavigate, Form} from "@remix-run/react";
import { getUsers, getProduct, getTest, createTransaction } from '~/data/sourceData';
import type { ActionFunctionArgs, MetaFunction, SessionData } from "@remix-run/node";
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
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
import { SelectChangeEvent } from '@mui/material/Select';
import { createCookieSessionStorage } from "@remix-run/node";
import { useSubmit } from "@remix-run/react";
import Input from '@mui/material/Input';
import { FormEvent } from 'react';


export async function loader({
  request,
}: LoaderFunctionArgs) {

  const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionData>(
    {
      // a Cookie from `createCookie` or the CookieOptions to create one
      cookie: {
        name: "__session",

        // all of these are optional
        domain: "remix.run",
        // Expires can also be set (although maxAge overrides it when used in combination).
        // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
        //
        // expires: new Date(Date.now() + 60_000),
        httpOnly: true,
        maxAge: 60,
        path: "/",
        sameSite: "lax",
        secrets: ["s3cret1"],
        secure: true,
      },
    }
  );

  const session = await getSession(
    request.headers.get("Cookie")
  );

  const users = await getUsers();
  const product = await getProduct();

  return json({
    users: await users.json(),
    product: await product.json()
  },{headers: {
    "Set-Cookie": await commitSession(session),
  },});

}

// Action to handle form submission
export async function action({ request }: ActionFunctionArgs) {

    const body = await request.formData();
    const type = String(body.get("type"));

    if (request.method == "POST") {

      if (type == "checkout") {
        const checkout = String(body.get("checkout"));
       
        const response = await createTransaction(checkout);
        console.log(response);
        
        if (response.meta.code != 200) {

            console.log(response.meta.message);

        }else{

            // Redirect to the user page
            return true;

        }

        
        return true;
      }

    }

    return redirect('/sales/checkout');
}

export const meta: MetaFunction = () => {

  return [
    { title: "ECCS POS - Sales" },
    { name: "description", content: "Welcome to eccs-pos!" },
  ];

};

export default function index() {

  const [cart, setCart] = React.useState({});
  React.useEffect(()=>{
    
    let data = JSON.parse(localStorage.getItem("cart") || '{}');
    setCart(data);

  },[])

  const myusers = useLoaderData < typeof loader > ();

  return(
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Grid container spacing={2} sx={{marginTop:"0.5em",width:"100%",height:"100%"}}>
        <Grid item xs={12} md={8} lg={8}>
          <p>
            {}
          </p>
          {TableProductCheckout(cart)}
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          {TableTotalCheckout(cart)}
        </Grid>
          {AddProduct()}
      </Grid>
    </div>
  );
  
}

const TableProductCheckout = (data: Object) => {
  
  let dtprod: { product_name: any; price: any; qty: any; total: any; }[] = [];

  if (data instanceof Array) {
    data.map((val, idx, []) => { 
      let opsdata = {
        "product_name":val.nama_produk,
        "price":val.pidr,
        "qty":val.qty_checkout,
        "total":val.pidr,
      };
      dtprod.push(opsdata);
    });
  }
  
  return (

    <div>
      {/* Checkout item list section */}
        <Box sx={{marginTop:"1em",textAlign:"center"}}>
          <Typography gutterBottom={true} variant="h4" component="h4">
            Checkout
          </Typography>
        </Box>
        
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650,width:"100%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>List Item</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dtprod.map((row: any) => (
                  <TableRow
                    key={row.product_name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.product_name}
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{row.total}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Stack useFlexGap flexWrap="wrap" direction={"row"} sx={{bgcolor:"#1976d2",color:"white"}}>

            <Grid xs={6} md={6} lg={6}>
              <Box>
                  <Typography margin={"0.5em"} textAlign={"left"} gutterBottom={true} variant="caption" component="h5">
                    Total Before Discount
                  </Typography>
                  <Typography margin={"0.5em"} textAlign={"left"} gutterBottom={true} variant="caption" component="h5">
                    Discount
                  </Typography>
                  <Typography margin={"0.5em"} textAlign={"left"} gutterBottom={true} variant="h5" component="h5">
                    Total
                  </Typography>
              </Box>
            </Grid>
              
            <Grid xs={6} md={6} lg={6}>
              <Box>
                  <Typography margin={"0.5em"} textAlign={"right"} gutterBottom={true} variant="caption" component="h5">
                    $ 14
                  </Typography>
                  <Typography margin={"0.5em"} textAlign={"right"} gutterBottom={true} variant="caption" component="h5">
                    $ 4
                  </Typography>
                  <Typography margin={"0.5em"} textAlign={"right"} gutterBottom={true} variant="h5" component="h5">
                    $ 10
                  </Typography>
              </Box>
            </Grid>
              
          </Stack>

        </Box>
    </div>

  );

}

const TableTotalCheckout = (data: Object) => {

  React.useEffect(() => {
    // This will re-mount whenever the `slug` changes
  }, []);

  const submit = useSubmit();
  const [age, setAge] = React.useState("");
  const [product, setProduct] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>, data : any) {

    event.preventDefault() // this will prevent Remix from submitting the form

    let length = data.length ? data:false;
    if (length == false) {
      alert("cart is empty");
      return false;
    }
  
    // preparing data to checkout
    let checkoutData = {
      "customer_id": 496,
      "cart": [],
      "type": "checkout"
    }
  
    data.map((product : any)=>{
      let ready = {
          "product_id":product.idproduk,
          "qty":parseInt(product.qty_checkout),
          "attribute": product.attributes,
          "attribute_note": ""
      };
      checkoutData.cart.push(ready); 
    })

    console.log(checkoutData);
    const formData = new FormData();
    formData.append("checkout",JSON.stringify(checkoutData));
    formData.append("type","checkout");

    submit(formData, {
      action: "/sales",
      method: "post",
      encType: "application/x-www-form-urlencoded",
      preventScrollReset: false,
      replace: false,
      relative: "route",
    });
  }


  return(
    <div>
      <Stack  
              direction="column"
              justifyContent="space-around"
              alignItems="stretch"
              spacing={0.5}
              sx={{marginTop:"4.5em"}}
          >
              <Box bgcolor={"#f7f7f7"}>
                <Stack useFlexGap flexWrap="wrap" direction={"row"}>
                  
                  <Grid xs={6} md={6} lg={6}>
                    <Box>
                        <Typography margin={"0.5em"} textAlign={"left"} gutterBottom={true} variant="h5" component="h5">
                          Total
                        </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid xs={6} md={6} lg={6}>
                    <Box>
                        <Typography margin={"0.5em"} textAlign={"right"} gutterBottom={true} variant="h5" component="h5">
                          $ 10
                        </Typography>
                    </Box>
                  </Grid>

                  <Grid xs={12} md={12} lg={12}>
                    <Box>
                        {UserList()}
                    </Box>
                  </Grid>

                  <Grid xs={12} md={12} lg={12}>
                    <Box>
                      <TextField
                          variant="outlined"
                          sx={{margin:"0.5em"}}
                          id="outlined-required"
                          label="Voucher"
                          defaultValue=""
                          style={{
                            color:"white",
                          }}
                        />
                    </Box>
                  </Grid>

                  <Divider variant="middle" />

                  <Grid xs={12} md={12} lg={12}>
                    <Box sx={{margin:"0em",marginTop:"0.5em"}}>
                      <Form method="POST" action='checkout' onSubmit={(e)=>{
                        handleSubmit(e,data)
                      }}>
                      <Input type="hidden" size='small' name="email" id="email" defaultValue="wasdas@asdas.com" />
                      <Button type="submit" size={"large"} fullWidth={true} variant="contained" color="success">
                        Pay
                      </Button>
                      </Form>
                    </Box>
                  </Grid>
                 
                </Stack>
              </Box>
  
      </Stack>
    </div>
  );

}

const UserList = () => {

  const myusers = useLoaderData < typeof loader > ();
  
  const users = myusers.users.result
      .map((record :any) => {
          return {label: (record.nama_lengkap != null ? record.nama_lengkap:"No name"),id: record.id}
  });
        
  const onTagsChange = (event:any, values:any) => {
    console.log(event);
    console.log(values);
  }

  const filterOptions = createFilterOptions({
    ignoreCase: true,
    matchFrom: "start",
  });

  return (

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      filterOptions={filterOptions}
      options={users}
      sx={{ width: 300}}
      renderInput={(params) => <TextField sx={{margin:"0.5em" }} {...params} label="Customer *" />}
      onChange={onTagsChange}
    />

  );

}

const AddProduct = () => {
  const navigate = useNavigate();
  const handleClickOpen = () => {
    navigate("add/1");
  };

  return (

    <div>

    <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab sx={{
              position: "fixed",
              bottom: (theme) => theme.spacing(2),
              right: (theme) => theme.spacing(2)
            }} 
            color="primary"
            aria-label="add"
            onClick={handleClickOpen}
            >
          <Icon>add</Icon>
        </Fab>
    </Box>

    </div>

  );

}

function useLocalStorage(key:any, initialValue:any) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value:any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}