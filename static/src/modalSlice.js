
const modalSlice = RTK.createSlice({
    name: 'modal',
    initialState: {
        showTweet: false,
        showComment: false,
        showPopup: false,
        tweet: {}
    },
    reducers: {
        toggleTweet(state){
            state.showTweet = !state.showTweet;
        },
        toggleComment(state){
            state.showComment = !state.showComment;
        },
        togglePopup(state, tweet){
            state.showPopup = !state.showPopup;
            state.tweet = tweet;
        },
    },
});

export const {toggleTweet, toggleComment, togglePopup} = modalSlice.actions;
export default modalSlice;