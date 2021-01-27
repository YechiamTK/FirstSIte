const flaskSlice = RTK.createSlice({
  name: 'flask',
  initialState: {
    update: false
  },
  reducers: {
    updateTweets(state) {
      state.update = !state.update;
    }

  }
});
export const {
  updateTweets
} = flaskSlice.actions;
export default flaskSlice;