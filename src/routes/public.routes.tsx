import { Navigate, RouteObject } from "react-router-dom";
import { PageDoesNotExist } from "../pages/PageDoesNotExist";

let routes = [
    {
        path : '',
        element : <Navigate to='/login' />
    },
    {
        path : '*',
        element : <PageDoesNotExist />
    }
] as RouteObject[];

export const public_routes = () => {
    for(let route of routes){
        route = {
            ...route,
            errorElement : <PageDoesNotExist />
        }
    }
    return routes
};
