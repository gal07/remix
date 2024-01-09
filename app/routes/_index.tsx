import * as React from 'react';
import { json, redirect, type MetaFunction } from "@remix-run/node";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getSession, commitSession, requireUserSession } from '~/sessions';
import { Typography } from '@mui/material';
import { getDataDashboard } from '~/data/sourceData';
import { useLoaderData } from '@remix-run/react';
import DisplayPanel from '../components/dashboard/displayPanel';
import activeOrder from '../components/dashboard/activeOrder';

export const loader = async ({ request }: { request: Request }) => {
  
  await requireUserSession(request);
    
  const session = await getSession(request.headers.get("Cookie"));
  const secret = (session.has('keySec') ? session.get("keySec"):null);
  const dashboard = await getDataDashboard(secret,1);

  return json({
    dashboard: await dashboard.json(),
  }, {
      headers: {
          "Set-Cookie": await commitSession(session)
      }
  });

}

export const meta: MetaFunction = () => {
  return [
    { title: "ECCS POS - Dashboard" },
    { name: "description", content: "Welcome to eccs-pos!" },
  ];
};

export default function Index() {

  const data = useLoaderData < typeof loader > ();  
  const data_dashboard = data.dashboard.result.data;
  return (
    
    <div>
      <Box sx={{flexGrow:1,marginTop:"1em"}}>
        {DisplayPanel(data_dashboard)}
        {activeOrder(data_dashboard.active_order.data)}
      </Box>
    </div>

  );
}
