import MainLayout from "@/layouts/main.layout";
import { SearchOrg, OrgDetails, MembersList } from "@/pods/organizations";

const OrganizationScene = () => {
  return (
    <MainLayout>
      <SearchOrg />
      <OrgDetails />
      <MembersList />
    </MainLayout>
  );
};

export default OrganizationScene;
