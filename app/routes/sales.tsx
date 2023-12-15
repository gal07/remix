import * as React from 'react';
import {redirect, type LoaderFunctionArgs, json}
from "@remix-run/node";
import {useLoaderData, Outlet,useNavigate} from "@remix-run/react";
import { getUsers, getProduct } from '~/data/sourceData';
import type { MetaFunction } from "@remix-run/node";
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
// import { getSession, commitSession } from "~/utils/session";


export async function loader({
  request,
}: LoaderFunctionArgs) {

  const users = await getUsers();
  const product = await getProduct();

  return json({
    users: await users.json(),
    product: await product.json()
  });

}

export const meta: MetaFunction = () => {

  return [
    { title: "ECCS POS - Sales" },
    { name: "description", content: "Welcome to eccs-pos!" },
  ];

};

export default function index() {

  const myusers = useLoaderData < typeof loader > ();

  return(
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Grid container spacing={2} sx={{marginTop:"0.5em",width:"100%",height:"100%"}}>
        <Grid item xs={12} md={8} lg={8}>
          {TableProductCheckout("asd")}
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          {TableTotalCheckout()}
        </Grid>
          {AddProduct()}
      </Grid>
    </div>
  );
  
}

const TableProductCheckout = (data: any) => {

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows: any = [
    
  ];

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
                {rows.map((row: any) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
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

const TableTotalCheckout = () => {

  React.useEffect(() => {
    // This will re-mount whenever the `slug` changes
  }, []);
  
  const [age, setAge] = React.useState("");
  const [product, setProduct] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

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
                      <Button size={"large"} fullWidth={true} variant="contained" color="success">
                        Pay
                      </Button>
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
    navigate("add");
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