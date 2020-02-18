export const saveImages = images => {
    console.log("image")
    return {
        type: 'SAVE_IMAGE',
        payload: images
    }
}

export const saveImageDetails = image =>{
    console.log(image)
    return {
        type: 'SAVE_IMAGE_DETAILS',
        payload: image
    }
}