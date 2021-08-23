
const flaskSlice = RTK.createSlice({
    name: 'flask',
    initialState: {
        update: false,
        signIn: false,
        id: -1
    },
    reducers: {
        updateTweets(state){
            state.update = !state.update;
        },
        signInAttempt(state){
            state.signIn = !state.signIn;
        }
    },
});

export const {updateTweets, signInAttempt} = flaskSlice.actions;
export default flaskSlice;