import {useMatches, useRouteLoaderData, useResolvedPath, useParams, useOutletContext, Outlet} from "@remix-run/react";


export default function index(){
    const ums = useMatches();
    console.log(ums);
    
    return(
        <div>
            <p>
                Sales/create
            </p>
            <Outlet />
        </div>
    );
}