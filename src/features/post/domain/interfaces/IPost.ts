export interface IPost {
  id: string;
  title: string;
  description: string;
  date: Date;
  author: string;
  category: string;
}

export interface IPostJson {
  id: string;
  title: string;
  description: string;
  category: string;
  createAt: string;
  updateAt: string;
  user: {
    id: string;
    name: string;
  };
}
