const flaskSlice = RTK.createSlice({
  name: 'flask',
  initialState: {
    update: false,
    signIn: false,
    signUp: false,
    id: -1
  },
  reducers: {
    updateTweets(state) {
      state.update = !state.update;
    },

    signInAttempt(state, action) {
      //if (action.type == 'signIn/signed'){
      state.id = action.payload;
      console.log(state.id + "\n" + action.payload); //}

      state.signIn = !state.signIn;
    },

    signUpAttempt(state) {
      state.signUp = !state.signUp;
    }

  }
});
export const {
  updateTweets,
  signInAttempt,
  signUpAttempt
} = flaskSlice.actions;
export default flaskSlice;