import type { ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
import {createUsers} from "../data/sourceData"

// Action to handle form submission
export async function action({ request }: ActionFunctionArgs) {
    console.log("Masuk user_create");
    
    // Get the form data from the request
    const formData = await request.formData();
    const email = String(formData.get("email"));
    const nama_depan = String(formData.get("nama_depan"));
    const nama_belakang = String(formData.get("nama_belakang"));
    const phone = String(formData.get("phone"));
    const alamat = String(formData.get("alamat"));
    const data = {
        "email":email,
        "nama_depan":nama_depan,
        "nama_belakang":nama_belakang,
        "phone":phone,
        "alamat":alamat,
    };

    // Update user
    const response = await createUsers(data);

    if (response.meta.code != 200) {
        return response.meta.message;
    }else{
        // Redirect to the user page
        return redirect("/users");
    }
    
}