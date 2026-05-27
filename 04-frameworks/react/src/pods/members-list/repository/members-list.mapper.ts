import type { MemberListItem } from "../members-list.vm";
import type { MemberListItemApi } from "./members-list.api-model";

export const mapMemberListItemApiToVm = (
  member: MemberListItemApi,
): MemberListItem => {
  return {
    login: member.login,
    avatar_url: member.avatar_url,
    url: member.url,
  };
};
