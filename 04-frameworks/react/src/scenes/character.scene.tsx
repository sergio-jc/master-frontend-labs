import { Button } from "@/common/ui/button";
import MainLayout from "@/layouts/main.layout";
import CharacterDetailContainer from "@/pods/rick-and-morty/character-detail/character-detail.container";
import { useNavigate } from "react-router";

const CharacterScene = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  return (
    <MainLayout>
      <div>
        <Button onClick={onBack}>Go Back to Characters</Button>
      </div>
      <CharacterDetailContainer />
    </MainLayout>
  );
};

export default CharacterScene;
