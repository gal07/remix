import {useMatches, useLoaderData} from "@remix-run/react";
import { loader } from "~/routes/sales";

export default function index(){
    const ums = useMatches();
    console.log(ums);
    {loader}

    return(
        <div>
            <p>
                Sales/$Idorder
            </p>
        </div>
    );
}