import { mapMemberListItemApiToVm } from "./members-list.mapper";
import { getOrganizationMembersApi } from "./members-list.api";

export const getOrganizationMembers = async ({ name }: { name: string }) => {
  const result = await getOrganizationMembersApi({ name });
  return result.map(mapMemberListItemApiToVm);
};