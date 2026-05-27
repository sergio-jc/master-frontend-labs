import type { OrganizationDetails } from "../org-details.vm";
import type { OrgDetailsApi } from "./org-details.api-model";

export const mapOrgDetailsApiToVm = (
  organization: OrgDetailsApi,
): OrganizationDetails => {
  return {
    name: organization.name,
    description: organization.description,
    avatar_url: organization.avatar_url,
    url: organization.html_url,
  };
};
