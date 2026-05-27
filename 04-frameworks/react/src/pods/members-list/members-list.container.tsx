import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { MemberListItem } from "./members-list.vm";
import MembersListComponent from "./members-list.component";
import { getOrganizationMembers } from "./repository";

function MembersListContainer() {
  const { organizationId } = useParams();

  const [organizationMembers, setOrganizationMembers] = useState<
    MemberListItem[]
  >([]);

  useEffect(() => {
    if (!organizationId) return;
    getOrganizationMembers({ name: organizationId }).then(
      (members: MemberListItem[]) => {
        setOrganizationMembers(members);
      },
    );
  }, [organizationId]);

  if (!organizationId || !organizationMembers) return <p>Organization not found</p>;

  return (
    <MembersListComponent
      membersList={organizationMembers}
      organizationId={organizationId ?? ""}
    />
  );
}

export default MembersListContainer;
