import * as types from "../Action/actionTypes";

const initialState = {
  showModal: false,
  heading: "",
  items: [],
  courseType: null,
  filteredItems: [],
  responseSnackbar: false,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.showModalHandler:
      return {
        ...state,
        showModal: !state.showModal,
        items: action.payload.courses,
        heading: action.payload.heading,
        filteredItems: action.payload.filteredItems,
        courseType: action.payload.courseType,
      };
    case types.filterCourses:
      return {
        ...state,
        courseType: action.payload.courseType,
        filteredItems: action.payload.filteredItems,
      };
    case types.SNACKBAR: {
      return {
        ...state,
        responseSnackbar: !state.responseSnackbar,
      };
    }
    default:
      return state;
  }
};
export default courseReducer;
