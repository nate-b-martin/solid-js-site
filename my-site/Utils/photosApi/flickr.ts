import axios from "axios";
import config from "./config";
import { find, map } from "lodash-es";
import {
  PhotoSetGetListResponse,
  PhotoSetGetPhotosResponse,
} from "./types/FlickrTypes";

//flickr.photosets.getList
const getPhotoSetId = async (photoSetTitle: string) => {
  console.log("Running photoset id list request");
  const response: PhotoSetGetListResponse = await axios.get(
    `https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${config.Key}&user_id=${config.UserId}&format=json&nojsoncallback=1`
  );

  const photosetId = find(response.data.photosets.photoset, (set) => {
    return set.title._content === photoSetTitle;
  })?.id;
  console.log(`Photo set ID: ${photosetId}`);

  return photosetId;
};

//flickr.photosets.getPhotos
const getPhotosFromSet = async (setId: string | undefined) => {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${config.Key}&photoset_id=${setId}&user_id=${config.UserId}&format=json&nojsoncallback=1`;
  const response: PhotoSetGetPhotosResponse = await axios(url);

  const photoArray = map(response.data.photoset.photo, (o) => {
    return o.id;
  });

  return photoArray;
};

//flickr.photos.getSizes

async function run() {
  const setId = await getPhotoSetId("Puppies");
  const photos = await getPhotosFromSet(setId);
  console.log(photos);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  await run();
})();
