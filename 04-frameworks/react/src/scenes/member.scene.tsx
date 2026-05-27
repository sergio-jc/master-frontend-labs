import { Button } from "@/common/ui/button";
import MainLayout from "@/layouts/main.layout";
import MemberDetailContainer from "@/pods/member-detail/member-detail.container";
import { useNavigate } from "react-router";

const MemberScene = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  return (
    <MainLayout>
      <div>
        <Button onClick={onBack}>Go Back to Organization</Button>
      </div>
      <MemberDetailContainer />
    </MainLayout>
  );
};

export default MemberScene;
