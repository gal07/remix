import type {ActionFunctionArgs, MetaFunction}
from "@remix-run/node";
import Box from '@mui/material/Box';
import {DataGrid, GridColDef, GridRowSelectionModel, GridRowsProp, GridToolbar} from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {json} from "@remix-run/node"; // or cloudflare/deno
import type {LoaderFunctionArgs}
from "@remix-run/node";
import {useLoaderData, useNavigate, useSubmit} from "@remix-run/react";
import { getTransaction } from '../data/sourceData'
import { commitSession, getSession, requireUserSession } from "~/sessions";
import { Badge, Button, Divider, Icon } from "@mui/material";
import React from "react";


export const loader = async ({request} : LoaderFunctionArgs) => {

    await requireUserSession(request);
    
    const session = await getSession(request.headers.get("Cookie"));
    const secret = (session.has('keySec') ? session.get("keySec"):null);
    let page = 1;
    let pagesize = 20;
    let search = "";

    if (session.has('nextpage')) {
        let v = session.get('nextpage');
        page = v;
    }

    // if (session.has('pagesize')) {
    //     let v = session.get('pagesize');
    //     pagesize = v;
    // }

    if (session.has('search')) {
        let getsearch = session.get('search');
        search = getsearch;
    }

    const order = await getTransaction(secret,search,page,pagesize,0);
    const total = order.pagination.total_page*pagesize;
    
    return json({
        flash: secret,
        order: order,
        total: total
    }, {
        headers: {
            "Set-Cookie": await commitSession(session)
        }
    });

};

// Action to handle form submission
export async function action({ request }: ActionFunctionArgs) {
  

    const session = await getSession(request.headers.get("Cookie"));
    const secret = (session.has('keySec') ? session.get("keySec"):null);
    const body = await request.formData();
    const type = String(body.get("type"));
    
    if (request.method == "POST") {

        if (type == "changepage") {
            let nextpage = body.get("next");
            let pagesize = body.get("pagesize");

            session.flash("nextpage",nextpage)
            session.flash("pagesize",pagesize)

            return json({}, {
                headers: {
                    "Set-Cookie": await commitSession(session)
                }
            });
        }

        if (type == "searchorder") {
            let search = body.get("search");
            session.flash("search",search)
            return json({}, {
                headers: {
                    "Set-Cookie": await commitSession(session)
                }
            });
        }
        

    }

    return true;

}



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
    const submit = useSubmit();
    const [paginationModel, setPaginationModel] = React.useState({
        page: 0,
        pageSize: 5,
      });
    const [loading, setLoading] = React.useState(false);
    const [rowCount, setRowCount] = React.useState<any | any>(order.total);
    const [search, setSearch] = React.useState<any | any>("");
    console.log(order);
    
    // React.useEffect(()=>{
        
    //     (async () => {
    //         setLoading(true);

    //         let pageNext = paginationModel.page + 1;
    //         const result = await getTransaction(order.flash,search,pageNext,20,0);
    //         setRowCount(result.pagination.total_page*20)

    //         setLoading(false);
    //     })();

    // },[])

    const handleSearchOrder = (query :any) => {
        const formData = new FormData();
        formData.append("search",query.toString());
        formData.append("type","searchorder");
        console.log(query);
        
        submit(formData, {
            action: "/order",
            method: "POST",
            preventScrollReset: false,
            replace: false,
            relative: "route",
        });
    }

    const handleChangePage = (nextp :any) => {
        
        const formData = new FormData();
        setPaginationModel(nextp)
        let pageNext = paginationModel.page + 1;
        formData.append("next",pageNext.toString());        
        formData.append("pagesize",nextp.pageSize.toString());
        formData.append("type","changepage");
        submit(formData, {
            action: "/order",
            method: "POST",
            preventScrollReset: false,
            replace: false,
            relative: "route",
        });


    }

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
                        rows={(order.order ? order.order.data: [])}
                        columns={columns}
                        initialState={{
                             pagination: {
                                paginationModel: {
                                    page: 0,
                                    pageSize: 20
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
                        pageSizeOptions={[20,50,100]}
                        onPaginationModelChange={(p,)=>{                            
                            handleChangePage(p)
                        }}
                        loading={loading}
                        onFilterModelChange={(e :any)=>{
                            // setSearch(e.quickFilterValues[0]);
                            handleSearchOrder(e.quickFilterValues[0])
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

