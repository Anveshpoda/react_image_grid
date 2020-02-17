const saveImages = (image) => {
    console.log("image")
    return {
        type: 'SAVE_IMAGE',
        payload: image
    }
}
export default saveImages;