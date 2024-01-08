import * as React from 'react';
import { json, type LinksFunction } from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";
import Appbar from "./layout/Appbar";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useNavigation,
  useRevalidator,
  useRouteError,
} from "@remix-run/react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Alert, Backdrop, CircularProgress, Snackbar, Typography } from '@mui/material';
import { io } from "socket.io-client";
import { commitSession, getSession,getCompanyID } from "~/sessions";
import Swal from 'sweetalert2'
import styles from "./styles/util.css";

export const links: LinksFunction = () => [
  ...(styles ? [{ rel: "stylesheet", href: styles }] : []),
];


export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <html>
      <head>
        <title>{error.status+" "+error.statusText}</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Typography variant='h3' sx={{
          color: "red",
          textAlign: "center",
          marginTop: "2em"
        }}>
          {error.status+" "+error.statusText}
        </Typography><Typography variant='h6' sx={{
          color: "red",
          textAlign: "center"
        }}>
            {error.data}
          </Typography>
        <Scripts />
      </body>
    </html>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <html>
          <head>
            <title>{error.message}</title>
            <Meta />
            <Links />
          </head>
          <body>
            {/* add the UI you want your users to see */}
            <Typography variant='h3' sx={{
              color: "red",
              textAlign: "center",
              marginTop: "2em"
            }}>
              {error.message}
            </Typography><Typography variant='h6' sx={{
              color: "red",
              textAlign: "center"
            }}>
                {error.stack}
              </Typography>
            <Scripts />
          </body>
        </html>
      </div>
    );
  } else {
    return (
      <div>
        <html>
          <head>
            <title>Error</title>
            <Meta />
            <Links />
          </head>
          <body>
            {/* add the UI you want your users to see */}
            <Typography variant='h3' sx={{
              color: "red",
              textAlign: "center",
              marginTop: "2em"
            }}>
              Unknown Error
            </Typography>
            <Scripts />
          </body>
        </html>
      </div>
    );
  }

}

export const loader = async ({ request }: { request: Request }) => {

  const session = await getSession(request.headers.get("Cookie"));

  return json({
    companyid: await getCompanyID(request) ,
}, {
    headers: {
        "Set-Cookie": await commitSession(session)
    }
});

}

export default function App() {

  const navigation = useNavigation();
  const revalidator = useRevalidator();
  const loaddata = useLoaderData < typeof loader > ();
  const [companyid, setCompanyid] = React.useState(loaddata.companyid);
  const [open, setOpen] = React.useState(false);
  console.log(companyid);
  
  React.useEffect(()=>{

    const socket = io('http://104.248.159.190:4001');
    
    socket.on("transaction-"+companyid,(msg :any ) =>{
      setOpen(true);
      Swal.fire('Payment Completed', 'Payment complete with ID '+msg.data_order.id_order, 'success');
      setTimeout(() => {
        revalidator.revalidate();
      }, 1000);
    })

    socket.on("connect", () => {
       // x8WIv7-mJelg7on_ALbx
    });

  },[loaddata])


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet"></link>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <Links />
      </head>
      <body>
        
        {(companyid > 0 ? <Appbar />:"")}
        
        <Container maxWidth="xl">
          <CssBaseline />
          <Outlet />
          <ScrollRestoration getKey={(location, matches) => {
            // default behavior
            return location.key;
          }}/>

          <LiveReload />
          <Scripts />
        </Container>

        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={(navigation.state === 'loading' ? true:(navigation.state === 'submitting' ? true:false))}
        >
            {/* <CircularProgress color="inherit" /> */}
            <Typography variant='body1'>{navigation.state === 'submitting' ? "Processing action":"Please Wait"}</Typography>
        </Backdrop>

      </body>
    </html>
  );
}
