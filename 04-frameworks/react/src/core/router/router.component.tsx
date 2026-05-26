import { Navigate, Route, Routes } from "react-router";
import { DEFAULT_ORGANIZATION_NAME } from "@/common/constants";

import SearchOrgComponent from "@/pods/search-org/search-org.component";
import MemberDetailComponent from "@/pods/member-detail/member-detail.component";

import { routes, switchRoutes } from "./routes";
import OrgDetailsComponent from "@/pods/org-details/org-details.component";

function RouterComponent() {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Routes>
        <Route
          path={switchRoutes.companies}
          element={
            <Navigate to={routes.companyDetails(DEFAULT_ORGANIZATION_NAME)} />
          }
        />
        <Route
          path={switchRoutes.companyDetails}
          element={
            <>
              <SearchOrgComponent />
              <OrgDetailsComponent />
            </>
          }
        />
        <Route
          path={switchRoutes.companyMemberDetails}
          element={<MemberDetailComponent />}
        />
      </Routes>
    </div>
  );
}

export default RouterComponent;
