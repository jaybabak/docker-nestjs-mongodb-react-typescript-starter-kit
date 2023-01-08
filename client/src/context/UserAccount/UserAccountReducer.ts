export const UserAccountReducer = (state: any, action: any) => {
  switch(action) {
    case 'setDarkModeActive':
      state = true;
      return state;
    case 'setLightModeActive':
      state = false;
      return state;
  }
}