import { RouteObject } from "react-router-dom";
import { AuthGuard } from "../guards/AuthGuard";
import { ReactNode } from "react";
import { AdminGuard, ContributorGuard, ReviewerGuard } from "../guards/RoleGuard";

const adminOnly = (page : ReactNode) => <AdminGuard>{page}</AdminGuard>;
const reviewerOnly = (page : ReactNode) => <ReviewerGuard>{page}</ReviewerGuard>;
const contributorOnly = (page : ReactNode) => <ContributorGuard>{page}</ContributorGuard>;

let routes = [] as RouteObject[];

export const private_routes = () => {
  for (let route of routes) {
    let current = route;
    route = {
      ...route,
      element : <AuthGuard> {current.element} </AuthGuard>,
      errorElement : <div>Something went wrong.</div>
    }
  }
  return routes;
};


