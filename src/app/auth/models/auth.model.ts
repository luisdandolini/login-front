export interface ILogin {
  email: string;
  password: string;
}

export interface IAuthRes {
  access_token: string;
}

export interface IUserProfile {
  name: string;
  email: string;
}
