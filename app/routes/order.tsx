import type {MetaFunction}
from "@remix-run/node";
import Box from '@mui/material/Box';
import {DataGrid, GridColDef, GridRowSelectionModel, GridRowsProp, GridToolbar} from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {json} from "@remix-run/node"; // or cloudflare/deno
import type {LoaderFunctionArgs}
from "@remix-run/node";
import {useLoaderData, useNavigate} from "@remix-run/react";
import { getTransaction } from '../data/sourceData'
import { commitSession, getSession, requireUserSession } from "~/sessions";
import { Badge, Button, Divider, Icon } from "@mui/material";
import React from "react";


export const loader = async ({request} : LoaderFunctionArgs) => {

    await requireUserSession(request);
    
    const session = await getSession(request.headers.get("Cookie"));
    const secret = (session.has('keySec') ? session.get("keySec"):null);

    return json({
        flash: secret,
    }, {
        headers: {
            "Set-Cookie": await commitSession(session)
        }
    });

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
        field: 'invoice_no',
        headerName: 'Invoice',
        flex: 1,
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
        field: 'total_string',
        headerName: 'Total',
        flex: 1,
        renderCell(params) {
            
            return(
                <p>{params.value}</p>
            );
        },
    }, {
        field: 'status',
        headerName: 'Status',
        flex: 1,
        renderCell(params) {
            return (
                <Typography variant="button" color={(params.value == 33 ? "lightcoral":(params.value == 6 ? "red":"green"))}>
                    {(params.value == 33 ? "Waiting Payment":(params.value == 6 ? "Cancelled":"Completed"))}
                </Typography>
            )
        },
    }, {
        field: 'action',
        headerName: 'Action',
        flex: 1,
        renderCell(params) {

            const navigate = useNavigate();

            return(
                <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                >
                    <Button onClick={()=>{
                        navigate('/order/'+params.id)
                    }}>
                        <Icon>
                            rate_review
                        </Icon>
                    </Button>
                </Stack>
            );
        },
    }
];


export default function Index() {

    const order = useLoaderData < typeof loader > ();
    const [paginationModel, setPaginationModel] = React.useState({
        page: 0,
        pageSize: 5,
      });
    const [rows, setRows] = React.useState<GridRowsProp>([]);
    const [loading, setLoading] = React.useState(false);
    const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>([]);
    const [dataOrder, setDataorder] = React.useState<any | any>();
    const [rowCount, setRowCount] = React.useState<any | any>(0);
    const [search, setSearch] = React.useState<any | any>("");


    React.useEffect(()=>{

        (async () => {
            setLoading(true);

            let pageNext = paginationModel.page + 1;
            const result = await getTransaction(order.flash,search,pageNext,10,0);
            setRowCount(result.pagination.total_page*10)
            setDataorder(result.data)

            setLoading(false);
        })();

    },[paginationModel,search])

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
                        paginationMode='server' 
                        rowCount={rowCount}
                        rows={(dataOrder ? dataOrder: [])}
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
                        pageSizeOptions={[10]}
                        onPaginationModelChange={(p,m)=>{
                            setPaginationModel(p)
                        }}
                        loading={loading}
                        onFilterModelChange={(e :any)=>{
                            setSearch(e.quickFilterValues[0]);
                        }}

                        />
                        
                </div>
            </Box>

        </div>

    );
    
}

function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

