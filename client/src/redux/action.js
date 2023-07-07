import { HIDE_PROGRESS_BAR, SHOW_PROGRESS_BAR } from "./actionType";

export const showProgressBar = () => ({
  type: SHOW_PROGRESS_BAR,
});

export const hideProgressBar = () => ({
  type: HIDE_PROGRESS_BAR,
});
