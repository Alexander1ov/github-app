export interface User {
  name: string;
  login: string;
  avatarUrl: string;
  createdAt: string;
}

export interface UserState {
  user: User | null;
  isAuth: boolean;
}
