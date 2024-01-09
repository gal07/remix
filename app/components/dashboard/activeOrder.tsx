import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button, Divider, Icon, Stack, Typography } from '@mui/material';
import { useNavigate } from '@remix-run/react';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID Order', width: 250 },
  { field: 'invoice_no', headerName: 'Invoice', width: 250 },
  { field: 'tanggal', headerName: 'Date', width: 250 },
  { field: 'total', headerName: 'Total', width: 250 },
  {
    field: 'status',
    headerName: 'Status',
    width: 250,
    renderCell: (param) =>{
        return(
            <Typography>
                {(param.value == 33 ? "Waiting Payment":"Unknown Status")}
            </Typography>
        );
    }
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 250,
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
  },
];


export default function ActiveOrder(data: any){
    

    return(
            
        <div style={{ height: 400, width: '100%' , marginTop: "1.5em",marginBottom:"3em"}}>
            <Typography variant='h5' sx={{textAlign:"center"}}>
                Active Orders
            </Typography>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>

    );

}