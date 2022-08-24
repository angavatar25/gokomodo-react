const initialState = {
  peopleData: [],
  metaPeopleData: {},
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_PEOPLE_DATA':
      return {
        ...state,
        peopleData: action.payload,
      }
    case 'GET_META_DATA':
      return {
        ...state,
        metaPeopleData: action.data,
      }
    default:
      return state;
  }
}

export default reducer;