const INITIAL_STATE = {
    images: []
}
export const imagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SAVE_IMAGE':
            return {
                images: [...state.images, action.payload]
            }
        default:
            return state
    }
}    