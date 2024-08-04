import { RouteObject } from "react-router-dom";
import { PageDoesNotExist } from "../pages/PageDoesNotExist";

let routes = [] as RouteObject[];

export const public_routes = () => {
    for(let route of routes){
        route = {
            ...route,
            errorElement : <PageDoesNotExist />
        }
    }
    return routes
};
