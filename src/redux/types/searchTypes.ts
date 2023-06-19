export interface RepositoriesSearch {
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

export interface SearchRepo {
  repositoryCount: number;
  nodes: Array<RepositoriesSearch>;
}

export interface SearchState {
  searchRepo: SearchRepo | null;
  searchValue: string;
  restart: boolean;
  numCalls: number;
  pageNumberSearch: number;
}
