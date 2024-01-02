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
import { getTransaction } from '../data/sourceData'
import { getSession, requireUserSession } from "~/sessions";

export const loader = async ({request} : LoaderFunctionArgs) => {

    await requireUserSession(request);
    
    const session = await getSession(request.headers.get("Cookie"));
    const secret = (session.has('keySec') ? session.get("keySec"):null);
    const result = await getTransaction(secret,0);
    return result;

};

export const meta: MetaFunction = () => {
    return [
        {
            title: "ECCS POS - Order"
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
        field: 'invoice',
        headerName: 'Invoice',
        flex: 1,
        renderCell: (params) => <img
                style={{
                    width: "25%"
                }}
                src={params.value}/>
    }, {
        field: 'nama_pelanggan',
        headerName: 'Customer',
        flex: 1
    }, 
    {
        field: 'tanggal',
        headerName: 'Date',
        flex: 1
    },{
        field: 'total_barang',
        headerName: 'Subtotal',
        flex: 1
    }, {
        field: 'voucher_nominal',
        headerName: 'Voucher',
        flex: 1
    }, {
        field: 'total',
        headerName: 'Total',
        flex: 1
    }, {
        field: 'status',
        headerName: 'Status',
        flex: 1
    }, {
        field: 'action',
        headerName: 'Action',
        flex: 1
    }
];


export default function Index() {

    const order = useLoaderData < typeof loader > ();
    
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
                    List Order
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
                        rows={order.data}
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

function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
