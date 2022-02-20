import { CREATE, FETCH_ALL } from '../../redux/constants/actionTypes';
import * as api from '../../api/restApi';

export const getVideos = (pageNo) => async (dispatch) => {
  try {
    const { data } = await api.fetchVideos(pageNo);

    data.reverse();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createVideo = (video) => async (dispatch) => {
  try {
    const { data } = await api.createVideo(video);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

