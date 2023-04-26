export type Info = {
  count: number;
  pages: number;
  next: string;
};

export type Origin = {
  name: string;
  url: string;
};

export type Location = {
  name: string;
  url: string;
};

export type Post = {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: Origin;
  location?: Location;
  image?: string;
  episode?: string[];
  url?: string;
  created?: Date;
};

export type PostState = {
  posts: Post[];
};
export type ApiData = {
  results: Post[]
}