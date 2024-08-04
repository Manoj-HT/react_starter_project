import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { private_routes } from "./private.routes";
import { public_routes } from "./public.routes";

export const router = createBrowserRouter([
    {
      path : '/',
      element : <App />,
      children: [
        ...private_routes(),
        ...public_routes(),
      ],
      
    },
  ])