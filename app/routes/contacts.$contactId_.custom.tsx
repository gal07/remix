import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getContact, updateContact } from "../data";
// import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

export const loader = async ({
params,
}: LoaderFunctionArgs) => {

    invariant(params.contactId, "Missing contactId param");
    const user = await getContact(params.contactId);
    return json({ user });

}

export const action = async ({
    params,
}:ActionFunctionArgs) => {
    invariant(params.contactId, "Missing contactId param");
    const data = {
        "last":"custom"
    };
    await updateContact(params.contactId, data);
    return redirect("/");
};

// export default function Custom() {

//     const { user } = useLoaderData<typeof loader>();
//     return (
//         <div>
//             <p>This function will update data {user?.first}</p>
//         </div>
//     );

// }
  