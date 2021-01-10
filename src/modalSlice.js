import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modal',
    initalState: {
        showTweet: false,
        showComment: false,
        showPopup: false
    },
    reducers: {
        toggleTweet(state){
            state.showModal = !state.showModal;
        },
        toggleComment(state){
            state.showComment = !state.showComment;
        },
        togglePopup(state){
            state.showPopup = !state.showPopup;
        }
    }
});

export const {toggleModal, toggleComment, togglePopup} = modalSlice.actions;
export default modalSlice;