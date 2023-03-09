import { DESKTOP_LARGE_BREAKPOINT, DESKTOP_SMALL_BREAKPOINT, TABLET_BREAKPOINT } from '../constants'

export const getColSpan = (screenWidth: number) => {
  if (screenWidth > DESKTOP_LARGE_BREAKPOINT) {
    return 3;
  }
  if (screenWidth > DESKTOP_SMALL_BREAKPOINT) {
    return 4;
  }
  if (screenWidth > TABLET_BREAKPOINT) {
    return 6;
  }
  return 8;
};