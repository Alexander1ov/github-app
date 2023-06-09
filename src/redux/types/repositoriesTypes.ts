export interface RepositoriesNodes {
  id: string;
  url: string;
  name: string;
  createdAt: string;
}

export interface Repositories {
  totalCount: number;
  totalDiskUsage: number;
  nodes: Array<RepositoriesNodes>;
}

export interface Repo {
  name: string;
  login: string;
  avatarUrl: string;
  createdAt: string;
  repositories: Repositories;
}

export interface RepositoriesState {
  repositories: Repo | null;
  loading: boolean;
  error: string | null;
}
