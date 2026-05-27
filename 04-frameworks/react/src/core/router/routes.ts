import { generatePath } from "react-router";

interface SwitchRoutes {
  root: string;
  organizations: string;
  organizationDetails: string;
  organizationMembers: string;
  organizationMemberDetails: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  organizations: "/organizations",
  organizationDetails: "/organizations/:organizationId",
  organizationMembers: "/organizations/:organizationId/members",
  organizationMemberDetails:
    "/organizations/:organizationId/members/:memberId",
};

interface Routes extends Omit<
  SwitchRoutes,
  "organizationDetails" | "organizationMemberDetails"
> {
  organizationDetails: (organizationId: string) => string;
  organizationMemberDetails: (
    organizationId: string,
    memberId: string,
  ) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  organizationDetails: (organizationId) =>
    generatePath(switchRoutes.organizationDetails, { organizationId }),
  organizationMemberDetails: (organizationId, memberId) =>
    generatePath(switchRoutes.organizationMemberDetails, {
      organizationId,
      memberId,
    }),
};
