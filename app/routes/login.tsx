import type {ActionFunctionArgs, LoaderFunctionArgs, MetaFunction}
from "@remix-run/node"; // or cloudflare/deno
import {json, redirect} from "@remix-run/node"; // or cloudflare/deno
import {useActionData, useLoaderData} from "@remix-run/react";

import {getSession, commitSession} from "../sessions";
import {authLogin} from "~/data/sourceData";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";


export const meta: MetaFunction = () => {

    return [
      { title: "ECCS POS - Login " },
      { name: "description", content: "Welcome to eccs-pos!" },
    ];
  
  };

export const loader = async ({ request }: { request: Request }) => {

    const session = await getSession(request.headers.get("Cookie"));

    if (session.has("userId")) {
        // Redirect to the home page if they are already signed in.
        return redirect("/");
    }

    const data = {
        error: session.get("error")
    };
    

    return json(data, {
        headers: {
            "Set-Cookie": await commitSession(session)
        }
    });

  }

export async function action({request} : ActionFunctionArgs) {

    const session = await getSession(request.headers.get("Cookie"));
    
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");
    const bodys = {
        email: email,
        password: password
    }
    
    const login = await authLogin(bodys);
    
    if (login.meta.code != 200) {
        session.flash("error", login.meta.message);        
        // Redirect back to the login page with errors.
        return redirect("/login", {
            headers: {
                "Set-Cookie": await commitSession(session)
            }
        });
    }

    session.set("userId", login.data[0].id);
    session.set("keySec", login.data[0].token);

    // Login succeeded, send them to the home page.
    return redirect("/", {
        headers: {
            "Set-Cookie": await commitSession(session)
        }
    });
}

export default function Login() {
    const {error} = useLoaderData < typeof loader > ();
    const actionData = useActionData<typeof action>();

    return (
        <div>
            
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: '80vh',
                // backgroundColor:"orange",
                marginTop: "2em",
            }}
            >
            <Grid item xs={12}>
                
                
                    {/* <div>
                        <p>Please sign in</p>
                    </div>

                    <form method="POST">
                        <label>
                            Username:
                            <input type="text" name="username"/>
                        </label>
                        <label>
                            Password:{" "}
                            <input type="password" name="password"/>
                        </label>
                        <button type="submit">Login</button>
                    </form> */}

                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '38ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    method="post"
                    action="/login"
                    >
                        <Stack
                         direction={"column"}
                         spacing={"1"}
                         useFlexGap={true}
                         sx={{
                            // backgroundColor:"orangered",
                            margin: "2em"
                         }}
                        >
                            
                            <Typography variant="h6" sx={{
                                textAlign:"center"
                            }}>ECCS POS LOGIN</Typography>

                            {
                                error
                                    ? <Typography variant="body1" sx={{textAlign:"center",color:"red",marginTop:"1em",marginBottom:"1em"}}>{error}</Typography>
                                    : null
                            }

                            <TextField required name="email" type="email" margin="normal" id="email" label="Email" variant="outlined" />
                            <TextField required name="password" type="password" margin="normal" id="password" label="Password" variant="outlined" />
                            <Button type="submit" variant="contained" color="primary">
                                Login
                            </Button>
                        </Stack>
                       
                    </Box>


            </Grid>
            </Grid>

        </div>
    );
}

