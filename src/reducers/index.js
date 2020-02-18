const INITIAL_STATE = {
    images: []
}
export const imagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SAVE_IMAGE':
            return {
                images: action.payload
            }
        case 'SAVE_IMAGE_DETAILS':
            let images = state.images
            let im = images.map(obj => obj.url == action.payload.url? action.payload : obj);
            console.log(im);
            return {
                images: im
            }    
        default:
            return state
    }
}    