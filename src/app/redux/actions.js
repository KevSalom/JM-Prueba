import axios from "axios";
export const SET_VIDEOS = "SET_VIDEOS";

export const setVideos = (videos) => ({
  type: SET_VIDEOS,
  payload: videos,
});

export const fetchVideos = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/videos");
      dispatch(setVideos(data));
    } catch (error) {
        console.error(error.message)
    }
  };
};
