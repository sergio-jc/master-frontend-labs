import { Navigate, Route, Routes } from "react-router";
import OrgDetailsComponent from "./pods/org-details/org-details.component";
import SearchOrgComponent from "./pods/search-org/search-org.component";
import { DEFAULT_ORGANIZATION_NAME } from "./core/constants";
import MemberDetailComponent from "./pods/member-detail/member-detail.component";

function App() {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Navigate to={`/${DEFAULT_ORGANIZATION_NAME}`} />} />
        <Route
          path="/:organizationName"
          element={
            <>
              <SearchOrgComponent />
              <OrgDetailsComponent />
            </>
          }
        />
        <Route
          path="/:organizationName/member/:memberName"
          element={<MemberDetailComponent />}
        />
      </Routes>
    </div>
  );
}

export default App;
