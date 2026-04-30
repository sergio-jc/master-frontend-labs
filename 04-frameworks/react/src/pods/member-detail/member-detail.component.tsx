import { getMember } from "@/services/organization";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

interface Member {
  login: string;
  avatar_url: string;
  url: string;
}

const MemberDetailComponent = () => {
  const { memberName } = useParams();
  const [member, setMember] = useState<Member | null>(null);
  useEffect(() => {
    if (!memberName) return;
    getMember({ name: memberName as string }).then((member) => {
      setMember(member);
    });
  }, [memberName]);
  return (
    <div>
      <h1>{member?.login}</h1>
      <img src={member?.avatar_url} alt={member?.login} />
      <a href={member?.url} target="_blank" rel="noopener noreferrer">
        {member?.url}
      </a>
    </div>
  );
};

export default MemberDetailComponent;
