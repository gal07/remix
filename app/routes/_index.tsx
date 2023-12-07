import * as React from 'react';
import type { MetaFunction } from "@remix-run/node";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h1>Welcome to Remix</h1>
        <Button variant="contained">Hello world</Button>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <Alert severity="warning">This is a warning alert — check it out!</Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">This is a success alert — check it out!</Alert>
        </Stack>

      </div>
  );
}
