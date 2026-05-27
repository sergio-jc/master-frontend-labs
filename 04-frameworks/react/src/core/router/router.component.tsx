import { Navigate, Route, Routes } from "react-router";
import { DEFAULT_ORGANIZATION_NAME } from "@/common/constants";

import MemberDetailComponent from "@/pods/member-detail/member-detail.component";

import { routes, switchRoutes } from "./routes";
import OrganizationScene from "@/scenes/organization.scene";

function RouterComponent() {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Routes>
        <Route
          path={switchRoutes.organizations}
          element={
            <Navigate
              to={routes.organizationDetails(DEFAULT_ORGANIZATION_NAME)}
            />
          }
        />
        <Route
          path={switchRoutes.organizationDetails}
          element={<OrganizationScene />}
        />
        <Route
          path={switchRoutes.organizationMemberDetails}
          element={<MemberDetailComponent />}
        />
      </Routes>
    </div>
  );
}

export default RouterComponent;
