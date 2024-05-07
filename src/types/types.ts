export type phone = {
  model: string;
  img: string;
  manufacturer: string;
  year: number;
  diagonal: string;
  country: string;
  meomory: string;
  refreshrate: string;
  NFC: boolean;
  ESIM: boolean;
  wirelesscharger: boolean;
  price: string;

  [key: string]: string | number | boolean;
};

export type filteredPhones = {
  shown: phone[];
  hidden: phone[];
};

export type phoneFeature = {
  name: string;
  translation: string;
};
