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
      url_svg: any;
      url_png: any;
    emoji: string;
    png: string;
  svg: string;
  };
  subregion?: string;

  population: number;
  region: string;

  capitals?: {
    name: string;
  }[];
}
