import { createSlice } from '@reduxjs/toolkit';

var modalSlice = createSlice({
    name: 'modal',
    initalState: {
        showTweet: false,
        showComment: false,
        showPopup: false
    },
    reducers: {
        toggleTweet: function toggleTweet(state) {
            state.showModal = !state.showModal;
        },
        toggleComment: function toggleComment(state) {
            state.showComment = !state.showComment;
        },
        togglePopup: function togglePopup(state) {
            state.showPopup = !state.showPopup;
        }
    }
});

var _modalSlice$actions = modalSlice.actions;
var toggleModal = _modalSlice$actions.toggleModal,
    toggleComment = _modalSlice$actions.toggleComment,
    togglePopup = _modalSlice$actions.togglePopup;
export { toggleModal, toggleComment, togglePopup };

export default modalSlice;