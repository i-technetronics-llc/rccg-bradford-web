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

export type IHeroSection = {
  __typename: string;
  heroTitle: string;
  heroSubtitle: string;
  createdAt: string;
  backgroundVideo: {
    __typename: string;
    url: string;
  };
};

export type ILatestSermon = {
  __typename: string;
  sermonTitle: string;
  sermonPreacher: string;
  sermonDate: string;
  createdAt: string;
  sermonImage: {
    __typename: string;
    url: string;
  }
}

export type INextEvent = {
  __typename: string;
  eventName: string;
  eventDateTime: string;
  createdAt: string;
  eventImage: {
    __typename: string;
    url: string;
  }
}