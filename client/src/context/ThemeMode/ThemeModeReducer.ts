export const ThemeModeReducer = (state: any, action: any) => {
  switch(action) {
    case 'setDarkModeActive':
      state = true;
      break;
    case 'setLightModeActive':
      state = false;
      break;
  }
  return state;
}