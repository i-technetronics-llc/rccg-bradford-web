export type IPastorBlog = {
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
};
