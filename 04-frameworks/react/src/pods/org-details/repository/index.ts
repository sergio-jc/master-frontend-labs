import { getOrgDetailsApi } from "./org-details.api";
import { mapOrgDetailsApiToVm } from "./org-details.mapper";

export const getOrganizationDetails = async ({ name }: { name: string }) => {
  const result = await getOrgDetailsApi({ name });
  return mapOrgDetailsApiToVm(result);
};
