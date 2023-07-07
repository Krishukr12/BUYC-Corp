import { SHOW_PROGRESS_BAR, HIDE_PROGRESS_BAR } from "./actionType";

export const Reducer = (state, { type }) => {
  switch (type) {
    case SHOW_PROGRESS_BAR:
      return {
        ...state,
        isVisible: true,
      };
    case HIDE_PROGRESS_BAR:
      return {
        ...state,
        isVisible: false,
      };
    default: {
      return state;
    }
  }
};
