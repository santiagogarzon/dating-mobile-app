export interface Profile {
  id: string;
  info: {
    age: number;
    type: string;
    gender: string;
    sexuality: string;
    name: string;
    about: string;
    desires?: string[];
    interests?: string[];
  };
  associated?: null | number;
  photos: [
    {
      url: string;
      width: number;
      height: number;
    }
  ];
}

export interface ProfilesData {
  data: Profile[];
}

export interface Error {
  message: string;
}
