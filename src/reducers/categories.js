import { FETCH_CATEGORIES } from "../actionTypes";

const categories = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return state;
    default:
      return state;
  }
};

export default categories;
