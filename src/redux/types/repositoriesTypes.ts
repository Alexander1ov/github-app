export interface RepositoriesNodes {
  id: string;
  name: string;
  openGraphImageUrl: string;
  url: string;
  createdAt: string;
  pushedAt: string;
  owner: {
    id: string;
    login: string;
    url: string;
    avatarUrl: string;
  };
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
