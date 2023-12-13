import type { ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
import {updateUsers} from "../data/sourceData"

// Action to handle form submission
export async function action({ request }: ActionFunctionArgs) {
    
    // Get the form data from the request
    const formData = await request.formData();
    const id = String(formData.get("id"));
    const nama_depan = String(formData.get("nama_depan"));
    const nama_belakang = String(formData.get("nama_belakang"));
    const phone = String(formData.get("phone"));
    const alamat = String(formData.get("alamat"));
    const data = {
        "id":id,
        "nama_depan":nama_depan,
        "nama_belakang":nama_belakang,
        "phone":phone,
        "alamat":alamat,
    };

    // Update user
    const response = await updateUsers(parseInt(id),data);

    if (response.meta.code != 200) {
        console.log(data);
        console.log(response.meta.message);
        return response.meta.message;

    }else{

        // Redirect to the user page
        console.log(response.meta.message);
        return redirect("/users");

    }
    
}