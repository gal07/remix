import type {ActionFunctionArgs, LoaderFunctionArgs}
from "@remix-run/node"; // or cloudflare/deno
import {json, redirect} from "@remix-run/node"; // or cloudflare/deno
import {useActionData, useLoaderData} from "@remix-run/react";

import {getSession, commitSession} from "../sessions";
import {authLogin} from "~/data/sourceData";

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
    const username = form.get("username");
    const password = form.get("password");
    const bodys = {
        email: username,
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
            {
                error
                    ? <div className="error">{error}</div>
                    : null
            }
            <form method="POST">
                <div>
                    <p>Please sign in</p>
                </div>
                <label>
                    Username:
                    <input type="text" name="username"/>
                </label>
                <label>
                    Password:{" "}
                    <input type="password" name="password"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

