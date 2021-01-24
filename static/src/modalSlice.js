
const modalSlice = RTK.createSlice({
    name: 'modal',
    initialState: {
        showTweet: false,
        showComment: false,
        showPopup: false
    },
    reducers: {
        toggleTweet(state){
            state.showTweet = !state.showTweet;
        },
        toggleComment(state){
            state.showComment = !state.showComment;
        },
        togglePopup(state){
            state.showPopup = !state.showPopup;
        },
    },
});

export const {toggleTweet, toggleComment, togglePopup} = modalSlice.actions;
export default modalSlice;