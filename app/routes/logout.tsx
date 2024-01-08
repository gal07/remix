import type {ActionFunctionArgs, LoaderFunctionArgs}
from "@remix-run/node"; // or cloudflare/deno
import {json, redirect} from "@remix-run/node"; // or cloudflare/deno
import {useActionData, useLoaderData} from "@remix-run/react";

import {getSession, commitSession, destroySession} from "../sessions";
import {authLogin} from "~/data/sourceData";

export const loader = async ({ request }: { request: Request }) => {

    const session = await getSession(request.headers.get("Cookie"));

    session.unset("keySec")
    session.unset("userId")
    session.unset("voucher")
    session.unset("companyid")

    return redirect("/",{
        headers: {
            "Set-Cookie": await commitSession(session)
        }
    });

  }


