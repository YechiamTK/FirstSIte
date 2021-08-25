const flaskSlice = RTK.createSlice({
  name: 'flask',
  initialState: {
    update: false,
    signIn: false,
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
    }

  }
});
export const {
  updateTweets,
  signInAttempt
} = flaskSlice.actions;
export default flaskSlice;