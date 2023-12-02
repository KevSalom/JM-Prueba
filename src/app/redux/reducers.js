import { SET_VIDEOS } from "./actions";
const initialState = {
    allVideos: [],
  };
  
  const videoReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_VIDEOS :
        return {
          ...state,
          allVideos: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default videoReducer;