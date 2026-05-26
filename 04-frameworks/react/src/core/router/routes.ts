import { generatePath } from "react-router";

interface SwitchRoutes {
  root: string;
  companies: string;
  companyDetails: string;
  companyMembers: string;
  companyMemberDetails: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  companies: "/companies",
  companyDetails: "/companies/:companyId",
  companyMembers: "/companies/:companyId/members",
  companyMemberDetails: "/companies/:companyId/members/:memberId",
};

interface Routes extends Omit<
  SwitchRoutes,
  "companyDetails" | "companyMemberDetails"
> {
  companyDetails: (companyId: string) => string;
  companyMemberDetails: (companyId: string, memberId: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  companyDetails: (companyId) =>
    generatePath(switchRoutes.companyDetails, { companyId }),
  companyMemberDetails: (companyId, memberId) =>
    generatePath(switchRoutes.companyMemberDetails, {
      companyId,
      memberId,
    }),
};
