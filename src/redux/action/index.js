import axios from 'axios';

export const getPeopleData = (page) => async (dispatch) => {
  try {
    const params = {
      page: page,
    };
    const res = await axios.get('/people', { params: params });
    dispatch({ type: 'GET_META_DATA', data: res.data });
    dispatch({ type: 'GET_PEOPLE_DATA', payload: res.data.results });
  } catch(e) {
    console.log(e);
  }
}