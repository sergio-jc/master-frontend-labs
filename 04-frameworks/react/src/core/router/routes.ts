import { generatePath } from "react-router";

interface SwitchRoutes {
  root: string;

  // Search Organization
  organizations: string;
  organizationDetails: string;
  organizationMembers: string;
  organizationMemberDetails: string;

  // Rick & Morty API
  rickAndMorty: string;
  rickAndMortyCharacters: string;
  rickAndMortyCharacterDetails: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",

  // Search Organization
  organizations: "/organizations",
  organizationDetails: "/organizations/:organizationId",
  organizationMembers: "/organizations/:organizationId/members",
  organizationMemberDetails:
    "/organizations/:organizationId/members/:memberId",

  // Rick & Morty API
  rickAndMorty: "/rick-and-morty",
  rickAndMortyCharacters: "/rick-and-morty/characters/",
  rickAndMortyCharacterDetails: "/rick-and-morty/characters/:characterId",
};

interface Routes extends Omit<
  SwitchRoutes,
  "organizationDetails" | "organizationMemberDetails" | "rickAndMortyCharacterDetails"
> {
  organizationDetails: (organizationId: string) => string;
  organizationMemberDetails: (
    organizationId: string,
    memberId: string,
  ) => string;
  rickAndMortyCharacterDetails: (characterId: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  organizationDetails: (organizationId) =>
    generatePath(switchRoutes.organizationDetails, { organizationId }),
  organizationMemberDetails: (organizationId, memberId) =>
    generatePath(switchRoutes.organizationMemberDetails, {
      organizationId,
      memberId,
    }),
  rickAndMortyCharacterDetails: (characterId) =>
    generatePath(switchRoutes.rickAndMortyCharacterDetails, { characterId }),
};
