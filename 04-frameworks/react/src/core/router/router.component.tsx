import { Navigate, Route, Routes } from "react-router";
import { DEFAULT_ORGANIZATION_NAME } from "@/common/constants";

import MemberScene from "@/scenes/member.scene";
import OrganizationScene from "@/scenes/organization.scene";

import { routes, switchRoutes } from "./routes";
import HomeScene from "@/scenes/home.scene";

function RouterComponent() {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
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
          element={<MemberScene />}
        />
      </Routes>
    </div>
  );
}

export default RouterComponent;
