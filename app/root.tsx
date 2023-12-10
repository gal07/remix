import * as React from 'react';
import type { LinksFunction } from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";
import Fab from '@mui/material/Fab';
import Appbar from "./layout/Appbar";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
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
          <ScrollRestoration />
          <Scripts />
          <LiveReload />

          {/* FAB */}
          {/* <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab style={{"float":"right"}} color="primary" aria-label="add">
              <Icon>shopping_cart</Icon>
            </Fab>
          </Box> */}

        </Container>
       
      </body>
    </html>
  );
}
