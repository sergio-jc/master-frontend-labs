import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMemberDetail } from "./repository";
import type { MemberDetail } from "./member-detail.vm";
import MemberDetailComponent from "./member-detail.component";

const MemberDetailContainer = () => {
  const { memberId } = useParams();
  const [member, setMember] = useState<MemberDetail | null>(null);
  useEffect(() => {
    if (!memberId) return;
    getMemberDetail({ login: memberId as string }).then((member) => {
      setMember(member);
    });
  }, [memberId]);

  if (!member || !memberId) return <p>Member not found</p>;

  return <MemberDetailComponent member={member} />;
};

export default MemberDetailContainer;
