import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMember } from "./member-detail.api";

interface Member {
  login: string;
  avatar_url: string;
  url: string;
}

const MemberDetailComponent = () => {
  const { memberId } = useParams();
  const [member, setMember] = useState<Member | null>(null);
  useEffect(() => {
    if (!memberId) return;
    getMember({ login: memberId as string }).then((member) => {
      setMember(member);
    });
  }, [memberId]);

  if (!member) return <p>Member not found</p>;

  return (
    <div>
      <h1>{member.login}</h1>
      <img src={member.avatar_url} alt={member.login} />
      <a href={member.url} target="_blank" rel="noopener noreferrer">
        {member.url}
      </a>
    </div>
  );
};

export default MemberDetailComponent;
