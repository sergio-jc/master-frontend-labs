import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOrganizationMembers } from "./members-list.api";
import type { MemberListItem } from "./members-list.vm";
import MembersListComponent from "./members-list.component";

function MembersListContainer() {
  const { organizationId } = useParams();

  const [organizationMembers, setOrganizationMembers] = useState<
    MemberListItem[]
  >([]);

  console.log("organizationMembers Container", organizationMembers)

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
