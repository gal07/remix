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
import {getUsers} from '../data/sourceData'

export const meta: MetaFunction = () => {
    return [
        {
            title: "ECCS POS - Users"
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
        field: 'email',
        headerName: 'Email',
        flex: 1
    }, {
        field: 'nama_lengkap',
        headerName: 'Full Name',
        flex: 1
    }, {
        field: 'phone',
        headerName: 'Phone',
        type: 'number',
        flex: 1
    }, {
        field: 'action',
        headerName: 'Action',
        flex: 1
    }
];

export const loader = async (args : LoaderFunctionArgs) => {

    const result = await getUsers();
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
                    List Users
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
