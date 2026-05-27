import { Link } from "react-router";

import { routes } from "@/core";
import type { MemberListItem } from "../members-list.vm";

interface Props {
  member: MemberListItem;
  organizationId: string;
}

const MemberItemComponent: React.FC<Props> = (props) => {
  const { member, organizationId } = props;

  return (
    <li className="contents">
      <Link
        className="flex items-center gap-4 cursor-pointer border border-zinc-800 rounded-lg p-2"
        to={routes.organizationMemberDetails(
          organizationId ?? "",
          member.login,
        )}
      >
        <img
          src={member.avatar_url}
          alt={member.login}
          className="w-10 aspect-square rounded-full border border-zinc-700 object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold underline underline-offset-2">
            {member.login}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default MemberItemComponent;
