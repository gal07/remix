import * as React from 'react';
import type {MetaFunction}
from "@remix-run/node";
import Box from '@mui/material/Box';
import {DataGrid, GridColDef, GridToolbar} from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import type {LoaderFunctionArgs}
from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {getUsers, createUsers} from '../data/sourceData'
import type { ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Icon from '@mui/material/Icon';
import Fab from '@mui/material/Fab';
import { Form, useActionData, useSubmit } from "@remix-run/react";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import { requireUserSession } from '~/sessions';

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

// Action to handle form submission
export async function action({ request }: ActionFunctionArgs) {

    // Get the form data from the request
    const formData = await request.formData();
    const email = String(formData.get("email"));
    const nama_depan = String(formData.get("nama_depan"));
    const nama_belakang = String(formData.get("nama_belakang"));
    const phone = String(formData.get("phone"));
    const alamat = String(formData.get("alamat"));
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const onlychar = /^[a-zA-Z]+$/;
    const onlynumber = /^\d+$/;
    const data = {
        "email":email,
        "nama_depan":nama_depan,
        "nama_belakang":nama_belakang,
        "phone":phone,
        "alamat":alamat,
    };
    const errors = {
        
    };

    if (Object.keys(errors).length > 0) {
        return json({ errors });
    }else{

        // save data (create new users)
        const response = await createUsers(data);

        if (response.meta.code != 200) {

            console.log(response.meta.message);

        }else{

            // Redirect to the user page
            return true;

        }
    }


}

function createUserComponent() {

    // State for create form
    const actionData = useActionData<typeof action>();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setTimeout(function () {
            setOpen(false);
        }, 1000);
    };
    const handleSubmit = () => {
        
        handleClose()
    }

    return (

        <div>
            {/* Create */}
            {/* FAB & modal create user*/}
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

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-title">{"Create new user"}</DialogTitle>
                <DialogContent>
                    
                <Form method="post" action="create" onSubmit={handleSubmit}>
                        <Grid item xs={12} md={12} style={{marginBottom:"0.3em"}}>
                            <FormControl variant="standard"> 
                                <InputLabel htmlFor="nama_depan">First Name</InputLabel>
                                <Input required size='small' name="nama_depan" id="nama_depan" defaultValue="" />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={12} style={{marginBottom:"0.3em"}}>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="nama_belakang">Last Name</InputLabel>
                                <Input required size='small' name="nama_belakang" id="nama_belakang" defaultValue="" />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={12} style={{marginBottom:"0.3em"}}>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input required size='small' name="email" id="email" defaultValue="" />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={12} style={{marginBottom:"0.3em"}}>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="phone">Phone</InputLabel>
                                <Input required size='small' name="phone" id="phone" defaultValue="" />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={12} style={{marginBottom:"0.3em"}}>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="alamat">Address</InputLabel>
                                <Input size='small' name="alamat" id="alamat" defaultValue="" />
                            </FormControl>
                        </Grid>
                
                        <DialogActions>
                            <Button type='submit'>Create</Button>
                        </DialogActions>

                </Form>

                </DialogContent>
            </Dialog>
        </div>


    );

} 

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
    }, {
        field: 'email',
        headerName: 'Email',
        flex: 1,
        align:'left',
        headerAlign:'left'
    }, {
        field: 'nama_lengkap',
        headerName: 'Full Name',
        flex: 1,
        align:'left',
        headerAlign:'left'
    }, {
        field: 'phone',
        headerName: 'Phone',
        type: 'number',
        flex: 1,
        align:'left',
        headerAlign:'left'
    }, {
        field: 'action',
        headerName: 'Action',
        flex: 1,
        align:'center',
        headerAlign:'center',
        renderCell: (params) => {

            let id = params.id;
            
            // State for delete form
            const [openAlertDel, setAlertDel] = React.useState(false);
            const handleClosedelete = () => {
                setAlertDel(false)
            }
            const handleOpem = () => {
                setAlertDel(true)                
            }

            // State for update form
            const [openAlertUpd, setAlertUpd] = React.useState(false);
            const handleCloseUpd = () => {
                setAlertUpd(false)
            }
            const handleOpemUpd = (id: any) => {
                setAlertUpd(true)    
            }

            return( 
                <Stack direction="row" spacing="1">
                    <Tooltip title="Edit this user" arrow placement="bottom-start">
                        <Button onClick={handleOpemUpd} size="small" variant="contained" color="success">
                            Edit
                        </Button>
                    </Tooltip>
                    <Tooltip title="Delete this user" arrow placement="bottom-start">
                        <Button onClick={handleOpem} size="small" variant="contained" color="error">
                            Delete
                        </Button>
                    </Tooltip>

                    {/* DELETE */}
                    <Dialog
                        open={openAlertDel}
                        onClose={handleClosedelete}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {"Are you sure want delete this user ?"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This action can't rollback after you agree to delete.
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClosedelete}>Cancel</Button>
                        <Form
                            action="delete"
                            method="post"
                        >
                        <input name="id" type="hidden" value={id}/>
                        <Button type="submit" onClick={handleClosedelete} >Delete</Button>
                        
                        </Form>

                        </DialogActions>
                    </Dialog>

                    {/* UPDATE */}
                    <Dialog
                        open={openAlertUpd}
                        onClose={handleCloseUpd}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {"Update Data Customer"}
                        </DialogTitle>
                        <DialogContent>
                        <Form action="update" method="post" onSubmit={handleCloseUpd}>
                            <Grid item xs={12} md={12} style={{marginBottom:"0.3em"}}>
                                <input name="id" type="hidden" value={params.id}/>
                                <FormControl variant="standard"> 
                                    <InputLabel htmlFor="nama_depan">First Name</InputLabel>
                                    <Input required size='small' name="nama_depan" id="nama_depan" defaultValue={params.row.nama_depan} />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={12} style={{marginBottom:"0.3em"}}>
                                <FormControl variant="standard"> 
                                    <InputLabel htmlFor="nama_depan">Last Name</InputLabel>
                                    <Input required size='small' name="nama_belakang" id="nama_belakang" defaultValue={params.row.nama_belakang} />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={12} style={{marginBottom:"0.3em"}}>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="phone">Phone</InputLabel>
                                    <Input required size='small' name="phone" id="phone" defaultValue={params.row.phone} />
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={12} style={{marginBottom:"0.3em"}}>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="alamat">Address</InputLabel>
                                    <Input required size='small' name="alamat" id="alamat" defaultValue={params.row.alamat} />
                                </FormControl>
                            </Grid>

                            <DialogActions>
                                <Button type='submit'>Update</Button>
                            </DialogActions>

                        </Form>

                        </DialogContent>
                    </Dialog>

                </Stack>
            )
        },
        
    }
];

export const loader = async ({ request } : LoaderFunctionArgs) => {

    await requireUserSession(request);
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
            
            {/* Table of users */}
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
                    className="custom-toolbar"
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
            {createUserComponent()}
        </div>

    );

}

