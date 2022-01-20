interface IDefaultTheme {
  fonts: {
    family: {
      primary: string;
      primaryBold: string;
      primaryHeavy: string;
      title: string;
      logo: string;
    };
    weight: {
      primary: number;
      title: number;
    };
    sizes: {
      primary: string;
      title: string;
      logo: string;
    };
    style: {
      logo: string;
    };
  };
}

export const defaultTheme: IDefaultTheme = {
  fonts: {
    family: {
      primary: 'fungis, sanserif',
      primaryBold: 'fungisBold, sanserif',
      primaryHeavy: 'fungisHeavy, sanserif',
      title: "'Playfair Display', serif",
      logo: "'Playfair Display', serif",
    },
    sizes: {
      primary: '1rem',
      title: '1.5625rem',
      logo: '1.625rem',
    },
    weight: {
      primary: 400,
      title: 900,
    },
    style: {
      logo: 'italic',
    },
  },
};
