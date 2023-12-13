import type {MetaFunction}
from "@remix-run/node";
import Box from '@mui/material/Box';
import {DataGrid, GridColDef, GridToolbar} from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {json} from "@remix-run/node"; // or cloudflare/deno
import type {LoaderFunctionArgs}
from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import { getProduct } from '../data/sourceData'

export const meta: MetaFunction = () => {
    return [
        {
            title: "ECCS POS - Products"
        }, {
            name: "description",
            content: "Welcome to eccs-pos!"
        }
    ];
};

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        flex: 1
    }, {
        field: 'image',
        headerName: 'Image',
        flex: 1,
        renderCell: (params) => <img
                style={{
                    width: "25%"
                }}
                src={params.value}/>
    }, {
        field: 'barcode',
        headerName: 'SKU',
        flex: 1
    }, {
        field: 'product_name',
        headerName: 'Name',
        flex: 1
    }, {
        field: 'category',
        headerName: 'Category',
        flex: 1
    }, {
        field: 'price',
        headerName: 'Price',
        flex: 1
    }, {
        field: 'stock',
        headerName: 'Stock',
        flex: 1
    }, {
        field: 'weight',
        headerName: 'Weight',
        flex: 1
    }
];

export const loader = async (args : LoaderFunctionArgs) => {

    const result = await getProduct();
    return result;

};

export default function Index() {

    const myusers = useLoaderData < typeof loader > ();

    return (

        <div
            style={{
                fontFamily: "system-ui, sans-serif",
                lineHeight: "1.8"
            }}>

            <Box
                sx={{
                    marginTop: "1em",
                    textAlign: "center"
                }}>
                <Typography gutterBottom={true} variant="h5" component="h5">
                    List Product
                </Typography>
            </Box>

            <Box sx={{
                    boxShadow: 1
                }}>
                <div
                    style={{
                        height: '100%',
                        width: '100%'
                    }}>
                    <DataGrid
                        rows={myusers.result}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    page: 0,
                                    pageSize: 10
                                }
                            },
                            filter: {}
                        }}
                        slots={{
                            toolbar: GridToolbar
                        }}
                        slotProps={{
                            toolbar: {
                                showQuickFilter: true
                            }
                        }}
                        pageSizeOptions={[10, 50]}/>
                </div>
            </Box>

        </div>

    );
    
}
