export type IPastorBlog = {
  id: string;
  __typename: string;
  blogDescriptions: string[];
  blogTitle: string;
  createdAt: string;
  createdBy: {
    __typename: string;
    name: string;
  };
  publishedAt: string;
  category: string;
  blogImage: {
    url: string;
  }[];
};

export type ICategories = {
  __typename: string;
  categoryDescription: string;
  categoryTitle: string;
  createdAt: string;
  backgroundImage: {
    __typename: string;
    url: string;
  };
};
