export interface Country {
  names: {
    common: string;
    official: string;
  };

  codes: {
    alpha_3: string;
    alpha_2: string;
  };

  flag: {
    emoji: string;
  };

  population: number;
  region: string;

  capitals?: {
    name: string;
  }[];
}
