export interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    gender: string;
    created: string;
    status: string
    origin: {
      name: string
      url: string
    }
    collapsed: boolean;
  }