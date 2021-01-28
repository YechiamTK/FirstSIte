const modalSlice = RTK.createSlice({
  name: 'modal',
  initialState: {
    showTweet: false,
    showComment: false,
    showPopup: false,
    tweet: {}
  },
  reducers: {
    toggleTweet(state) {
      state.showTweet = !state.showTweet;
    },

    toggleComment(state) {
      state.showComment = !state.showComment;
    },

    togglePopup(state) {
      state.showPopup = !state.showPopup;
    },

    setActiveTweet(state, tweet) {
      state.tweet = tweet;
    }

  }
});
export const {
  toggleTweet,
  toggleComment,
  togglePopup,
  setActiveTweet
} = modalSlice.actions;
export default modalSlice;