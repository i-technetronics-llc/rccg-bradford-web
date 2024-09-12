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
  heroBackgroundVideo: {
    __typename: string;
    url: string;
  };
};

export type ILatestSermon = {
  __typename: string;
  sermonTitle: string;
  // sermonPreacher: string;
  sermonDate: string;
  createdAt: string;
  sermonImage: {
    __typename: string;
    url: string;
  };
};

export type INextEvent = {
  __typename: string;
  eventName: string;
  eventDateStartTime: string;
  eventDateEndTime: string;
  createdAt: string;
  eventImage: {
    __typename: string;
    url: string;
  };
  liveVideoUrl: string;
};

export type ILeader = {
  __typename: string;
  leaderDescription: string[];
  leaderName: string;
  leaderRole: string;
  leaderImage: {
    __typename: string;
    url: string;
  };
  id: string;
  br: string;
  br2: string;
};

export type IServices = {
  __typename: string;
  serviceTitle: string;
  serviceDetailsAndTime: string[];
  serviceImage: {
    __typename: string;
    url: string;
  };
};

export type IPictureGallery = {
  __typename: string;
  pictureCategoryTitle: string;
  pictureCategoryImage: IHygraphPicturesArray[];
};
export type IHygraphPicturesArray = {
  __typename: string;
  url: string;
};
