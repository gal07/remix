import type { ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
import {deleteUsers} from "../data/sourceData"

// Action to handle form submission
export async function action({ request }: ActionFunctionArgs) {

    // Get the form data from the request
    const formData = await request.formData();
    const id = String(formData.get("id"));

    // Delete user
    const response = await deleteUsers(parseInt(id));

    if (response.meta.code != 200) {

        console.log(response.meta.message);

    }else{

        // Redirect to the user page
        console.log(response.meta.message);
        return redirect("/users");

    }
    
}
