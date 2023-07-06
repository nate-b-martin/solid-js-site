export interface PhotoSetGetListResponse {
  data: {
    photosets: {
      page: number;
      pages: number;
      perpage: string;
      total: number;
      photoset: [
        {
          id: string;
          owner: string;
          username: string;
          primary: string;
          secret: string;
          server: string;
          farm: number;
          count_views: number;
          count_comments: number;
          count_photos: number;
          count_videos: number;
          title: { _content: string };
          description: { _content: string };
          can_comment: number;
          date_create: string;
          date_update: string;
          photos: number;
          videos: number;
          visibility_can_see_set: number;
          needs_interstitial: number;
        }
      ];
    };
    stat: string;
  };
}

export interface PhotoSizesResponse {
  sizes: {
    canblog: number;
    canprint: number;
    candownload: number;
    size: [
      {
        label: string;
        width: number;
        height: number;
        source: string;
        url: string;
        media: string;
      }
    ];
  };
  stat: string;
}

export interface PhotoSetGetListRequest {
  apiKey: string;
  userId: string;
}

export interface PhotoSetGetPhotosRequest {
  apiKey: string;
  photoset_id: string;
  userId: string;
}

export interface PhotoSetGetPhotosResponse {
  data: {
    photoset: {
      photo: [
        {
          id: string;
          secret: string;
          server: number;
          farm: number;
          title: string;
          isprimary: number;
          ispublic: number;
          isfriend: number;
          isfamily: number;
        }
      ];
      page: number;
      per_page: string;
      perpage: string;
      pages: number;
      title: string;
      total: number;
    };
    stat: string;
  };
}
