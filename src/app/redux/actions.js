import axios from "axios";
export const SET_VIDEOS = "SET_VIDEOS";

export const setVideos = (videos) => ({
  type: SET_VIDEOS,
  payload: videos,
});

export const fetchVideos = () => {
  return async (dispatch) => {
    try {
      console.log('entrando')
      const { data } = await axios.get("/api/videos");
      console.log(data)
      dispatch(setVideos(data));
    } catch (error) {
      console.lof('salio mal')
        console.error(error.message)
    }
  };
};
