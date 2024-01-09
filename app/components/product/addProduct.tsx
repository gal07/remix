import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Icon, IconButton, Typography } from "@mui/material";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import React from "react";
import { getProducts } from "~/data/sourceData";
import { getSession } from "~/sessions";

export default function addProduct (product: any) {

    const [myproduct, setMyProduct] = React.useState<any | any>(product);

    React.useEffect(()=>{
        
    },[product])
    
    return(
        <div>
            <Box sx = {{marginTop:"1em",textAlign:"center"}} > <Typography gutterBottom = {true} variant = "h4" component = "h4" >&nbsp;</Typography></Box>
            <div style={{marginLeft:"1em"}}>
                <Box boxShadow={2}>
                    
                    {/* content product */}
                    <Grid container sx={{margin:"0.5em"}}>

                        {

                            myproduct.map((item: any) => (
                                <Grid item xs={12} md={2} lg={2}>
                                    
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardHeader
                                            title={item.nama_produk}
                                            subheader={item.pidr}
                                            titleTypographyProps={{fontSize:"0.6em"}}
                                            subheaderTypographyProps={{fontSize:"0.5em"}}
                                        />
                                        <CardMedia
                                            sx={{
                                                objectFit:"contain"
                                            }}
                                            component="img"
                                            height="194"
                                            image={item.imageList}
                                            onLoad={(e)=>{
                                            
                                            return(<p>POP</p>);
                                            
                                            }}
                                            alt={item.nama_produk}
                                        />
                                        <CardActions disableSpacing>
                                            <IconButton onClick={()=>{
                                            // AddToCart(item)
                                            //   handleClickOpen(item)
                                            }} aria-label="add to favorites">
                                            <Icon>add_shopping_cart</Icon>
                                            </IconButton>
                                            {/* <IconButton aria-label="share">
                                            <Icon>visibility</Icon>
                                            </IconButton> */}
                                        </CardActions>
                                    </Card>

                                </Grid>
                            ))
                        }

                    </Grid>

                </Box>
            </div>
        </div>
    );
}