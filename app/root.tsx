import * as React from 'react';
import type { LinksFunction } from "@remix-run/node";
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
  useNavigation,
  useRouteError,
} from "@remix-run/react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Backdrop, CircularProgress, Typography } from '@mui/material';
import { getSession } from './sessions';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
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
  return true;

}

export default function App() {

  const navigation = useNavigation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
        
        <Appbar />
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
            open={(navigation.state === 'loading' ? true:false)}
        >
            <CircularProgress color="inherit" />
        </Backdrop>

      </body>
    </html>
  );
}
