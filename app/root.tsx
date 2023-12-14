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
  useRouteError,
} from "@remix-run/react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {

  const loginSession = {
    "api-x-key":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTY4LCJuYW1hX2RlcGFuIjoiU29kaWsiLCJuYW1hX2JlbGFrYW5nIjoiSmF5YW1hbnMiLCJlbWFpbCI6InNvamF5QGdtLmNvbSIsInBob25lIjoiNjI4NzcxMjYzNjEyMyIsInN0YXR1cyI6MSwicmVnX3NvdXJjZSI6ImVjY3MtaWQiLCJjb21wYW55X2lkIjoyMTcsImlhdCI6MTcwMjUyNTM3OH0.bI1cULf30M000R-1Q88Tk4-Fpihe4ztcgkcewmar1smxzlcuETZNnxd6iKnPN_xQAbFWVGKoNpG70GExRlDiFELOsSk72KQAbjMRJpX4mTF53mMi8lMYIU69AHgJhZr5vRMtdBgQGTUIs-6jVVOANWalH1GasnUagCaEUFELLZtmmkpxBkB8eZ318XUgPWjllySxuWCi5kQy9Iw4iGhro92f1MB4irlS-vRQnaDmKbo75aTCbhXjbEl2pe8ONskeQ32zGFMX83m43dG0_mKn-0VlzjtNcHxIATY2c-jV1iIBZgQ-zsk7fl-rteyKRXTMVvx1pRbxO9g9LLVvHdWBhuxeHHYZNMkUu4dAubwPA3Qa1okcWBIKahJ5LWe5kjVFsddqIClbPuwMQK4igFm1aRZ8JJfjgKAYyPekwQ3YtG80kyFtSY3XaYunb0_Ipy_pwkkbLV2SUVLuNN6DsJ9qSc-ZfV9gF10NLdL6XN9MAgt5yIIZhX8I7oSrIs6ZwV-D7MhJ9U9QE1AYm26Y4Z3c2o38DjBDe5PAqemYdMUDtOhZco5JbLM5gYlBMu4LccBuaUisFq4hVnm-s_zrePqZX3ppihP4v5V0NswDI4ETDNG8I6lbXb0My84C3guxFcFHermQwKTLBhiwc3CCoCwgakBeCAm0KkA8k0uj45ThAOU",
    "login":true
  };

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
          <LiveReload />
          <CssBaseline />
          <Outlet context={loginSession} />
          <ScrollRestoration />
          <Scripts />
        </Container>

      </body>
    </html>
  );
}
