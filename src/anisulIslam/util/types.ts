export type UserInfoProps = {
  userInfo: {
    profile: {
      name: {
        first__name: string;
        last__name: string;
      };
      age: number;
      phone__number: number | string;
      photo__URL: string;
      languages: string[];
    };
    travel: string[];
    isAdult: boolean;
  };
};

export type UsersDBType = {
  users: {
    id: number;
    profile: {
      firstName: string;
      lastName: string;
      photoURL: string;
      age: number;
      phone_number: string;
      country: string;
      hobby: string;
    };
  }[];
};
