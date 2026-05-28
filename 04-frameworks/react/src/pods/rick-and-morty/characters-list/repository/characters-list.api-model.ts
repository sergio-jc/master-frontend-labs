export interface CharactersResponseApi {
    info:    Info;
    results: CharacterApi[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface CharacterApi {
    id:       number;
    name:     string;
    status:   StatusApi;
    species:  SpeciesApi;
    type:     string;
    gender:   GenderApi;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  string;
}

export type GenderApi = "Female" | "Male" | "unknown";

export interface Location {
    name: string;
    url:  string;
}

export type SpeciesApi = "Alien" | "Human";

export type StatusApi = "Alive" | "Dead" | "unknown";
