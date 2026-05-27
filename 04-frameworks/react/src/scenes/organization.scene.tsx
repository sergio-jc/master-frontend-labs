import MainLayout from "@/layouts/main.layout";
import MembersListContainer from "@/pods/organizations/members-list/members-list.container";
import OrgDetailsContainer from "@/pods/organizations/org-details/org-details.container";
import { SearchOrgContainer } from "@/pods/organizations/search-org/search-org.container";

const OrganizationScene = () => {
  return (
    <MainLayout>
      <SearchOrgContainer />
      <OrgDetailsContainer />
      <MembersListContainer />
    </MainLayout>
  );
};

export default OrganizationScene;
