import { createSlice } from '@reduxjs/toolkit';

var modalSlice = createSlice({
    name: 'modal',
    initalState: { showModal: false },
    reducers: {
        toggleModal: function toggleModal(state) {
            state.showModal = !state.showModal;
        }
    }
});

var toggleModal = modalSlice.actions.toggleModal;
export { toggleModal };

export default modalSlice;