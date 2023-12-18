import { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";

export async function loader({
    request,
  }: LoaderFunctionArgs) {
  
    return true;
  
  }
  
  // Action to handle form submission
  export async function action({ request }: ActionFunctionArgs) {
  
    console.log(request);
    const body = await request.formData();
    const email = String(body.get("email"));
    const ss = String(body.get("myKey"));

    console.log(email);
    console.log(ss);

    console.log("masuk sales checkout");
    
    return true;
  
  }