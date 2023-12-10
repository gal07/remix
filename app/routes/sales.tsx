import type { MetaFunction } from "@remix-run/node";
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

export const meta: MetaFunction = () => {
  return [
    { title: "ECCS POS - Sales" },
    { name: "description", content: "Welcome to eccs-pos!" },
  ];
};

export default function Index() {



  return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      
      <Grid container spacing={2} sx={{marginTop:"0.5em"}}>
        <Grid item xs={8}>
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

        <Grid item xs={4}>
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

      </Grid>

      </div>
  );
}