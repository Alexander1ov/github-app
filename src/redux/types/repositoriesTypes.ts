export interface Repo {
  ID: string;
  login:string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

export interface RepositoriesState {
  repositoriesList: Repo[]|null;
  loading: boolean;
  error: string | null;
}
