import type { MemberDetailApi } from "./member-detail.api-model";
import type { MemberDetail } from "../member-detail.vm";

export const mapMemberDetailApiToVm = (member: MemberDetailApi): MemberDetail => {
  return {
    login: member.login,
    id: member.id,
    avatar_url: member.avatar_url,
    url: member.url,
    html_url: member.html_url,
    user_view_type: member.user_view_type,
    name: member.name,
    company: member.company,
    location: member.location,
    email: member.email,
    hireable: member.hireable,
    bio: member.bio,
    twitter_username: member.twitter_username,
    public_repos: member.public_repos,
    public_gists: member.public_gists,
    followers: member.followers,
    following: member.following,
    created_at: new Date(member.created_at),
    updated_at: new Date(member.updated_at),
  };
};
