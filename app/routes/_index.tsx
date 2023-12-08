import * as React from 'react';
import type { MetaFunction } from "@remix-run/node";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack'

export const meta: MetaFunction = () => {
  return [
    { title: "ECCS POS - Dashboard" },
    { name: "description", content: "Welcome to eccs-pos!" },
  ];
};

export default function Index() {



  return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      
        <p>This is dashboard</p>
        <Stack spacing={1}>
          {/* For variant="text", adjust the height via font-size */}
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </Stack>

      </div>
  );
}
