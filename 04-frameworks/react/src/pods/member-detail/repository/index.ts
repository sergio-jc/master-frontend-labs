import { getMemberDetailApi } from "./member-detail.api";
import { mapMemberDetailApiToVm } from "./member-detail.mapper";

export const getMemberDetail = async ({ login }: { login: string }) => {
  const result = await getMemberDetailApi({ login });
  return mapMemberDetailApiToVm(result);
};