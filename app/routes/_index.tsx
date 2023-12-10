import * as React from 'react';
import type { MetaFunction } from "@remix-run/node";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const meta: MetaFunction = () => {
  return [
    { title: "ECCS POS - Dashboard" },
    { name: "description", content: "Welcome to eccs-pos!" },
  ];
};

export default function Index() {

  const ar = [0,1,2,3,4,5,6];

  return (
    
    <div>
      <Box sx={{flexGrow:1,marginTop:"1em"}}>
        <Grid container spacing={2}>
          {

              ar.map((ar) => (
                <Grid item xs={12} md={6} lg={6}>
                  <Box sx={{bgcolor:"skyblue"}}>
                      <Stack sx={{margin:"0.6em"}}>
                        {/* For variant="text", adjust the height via font-size */}
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          
                        {/* For other variants, adjust the size with `width` and `height` */}
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="rectangular" width={210} height={60} />
                        <Skeleton variant="rounded" width={500} height={400} />
                      </Stack>
                  </Box>
                </Grid>        
              ))

          }
                  

        </Grid>
      </Box>
    </div>

  );
}
