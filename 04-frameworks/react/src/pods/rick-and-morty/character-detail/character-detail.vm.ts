export interface CharacterDetail {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type Gender = "Female" | "Male" | "unknown";
export type Species = "Alien" | "Human";
export type Status = "Alive" | "Dead" | "unknown";

export interface Location {
  name: string;
  url: string;
}
