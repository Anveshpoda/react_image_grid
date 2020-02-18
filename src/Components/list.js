import React, { Component, useState, useEffect } from 'react'
// import { connect } from 'react-redux'
import { Row, Col, Modal, message, Card } from 'antd'
import StackGrid from "react-stack-grid";
import ImageDetails from './imageDetailsForm';
import {saveImageDetails} from '../actions'
import { useSelector, useDispatch } from 'react-redux';


const List = (props) => {
    const [visible, setVisible] = useState(false);
    const [image, setImage] = useState({});
    const dispatch = useDispatch();

    const savedImages = useSelector(state => state.images.images);

    useEffect(() => {// Resize grid-layout after initial rendering 
        setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 500)
    }, [])

    const showImg = image => { setVisible(true); setImage(image) }
    const handleCancel = () => setVisible(false);


    const saveImage = data => {
        // Save The Image Details
        let url = image.url
        dispatch(saveImageDetails({...data,url}))
        message.success('Image Details Saved Successfully')
        setVisible(false)
    }


    return (
        <div>
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                <StackGrid
                    columnWidth={300} gutterWidth={15}
                    gutterHeight={15} duration={0}
                    monitorImagesLoaded={true}>

                    {props.tabId ?
                        props.data.map(image =>
                            <Card className="image-card">
                                {image.name && <div className='userName'>{image.name}</div>}
                                <img style={{ width: '100%' }} src={image.url} />
                        {image.desc && <p className='img-desc' style={{ margin: '10px' }}>{image.desc}</p>}

                            </Card>) :
                        props.data && props.data.map(image =>
                            <div key={image.url} style={{ cursor: 'pointer' }} onClick={() => showImg(image)}>
                                <img style={{ width: '100%' }} src={image.url} /></div>)
                    }

                </StackGrid>
            </div>

            <Modal
                width="400px" key="model"
                visible={visible}
                onCancel={handleCancel}
                title={null} footer={null}
            >
                <ImageDetails saveBtn={props.saveBtn} saveImage={saveImage} image={image} />
            </Modal>

        </div>
    )
}
export default List;
