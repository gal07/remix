import * as React from 'react';
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {FullScreenDialog} from '../components/chooseProduct'

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
];

export const meta: MetaFunction = () => {
  return [
    { title: "ECCS POS - Sales" },
    { name: "description", content: "Welcome to eccs-pos!" },
  ];
};

export default function Index() {

  const [age, setAge] = React.useState("");
  const [product, setProduct] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const triggerProductList = () => {
    (product != true ? setProduct(true):setProduct(false))
    console.log("sales product state : "+product);
    
  }

  return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      
      <Grid container spacing={2} sx={{marginTop:"0.5em",width:"100%",height:"100%"}}>

        {/* Checkout item list section */}
        <Grid item xs={12} md={8} lg={8}>

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
                  {rows.map((row) => (
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

        </Grid>

        {/* Checkout total section */}
        <Grid item xs={12} md={4} lg={4}>
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
                        <Typography margin={"0.5em"} textAlign={"left"} gutterBottom={true} variant="h5" component="h5">
                        <InputLabel id="demo-simple-select-label">Customer *</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>Abdul</MenuItem>
                          <MenuItem value={20}>Ferry</MenuItem>
                          <MenuItem value={30}>Manan</MenuItem>
                        </Select>
                        </Typography>
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
        </Grid>

      </Grid>

       

        {FullScreenDialog(product)}

      </div>
  );
}