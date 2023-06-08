export interface Repo {
  name: string;
  login: string;
  avatarUrl: string;
  // Nominal: number;
  // Name: string;
  // Value: number;
  // Previous: number;
}

export interface RepositoriesState {
  repositories: Repo | null;
  loading: boolean;
  error: string | null;
}
