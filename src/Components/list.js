import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Row, Col, Modal, message } from 'antd'
import StackGrid from "react-stack-grid";
import ImageDetails from './imageDetails';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            image: {}
        };
    }

    componentDidMount() { // Resize grid-layout after initial rendering 
        setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 500)
    }

    showImg = image =>   this.setState({ image, visible: true })
    handleCancel = () => this.setState({ visible: false });

    saveImage = () => {
        // Save this.state.image to new Array
        message.success('Image Saved Successfully')
        this.setState({visible:false})
    } 

    render() {
        return (
            <div>
                <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                    <StackGrid
                        columnWidth={300} gutterWidth={15}
                        gutterHeight={15} duration={0}
                        monitorImagesLoaded={true}>

                        {this.props.data && this.props.data.map(image =>
                            <div key={image.url} style={{ cursor: 'pointer' }} onClick={() => this.showImg(image)}>
                                <img style={{ width: '100%' }} src={image.url} /></div>)}

                    </StackGrid>
                </div>

                <Modal
                    width="900px" key="model"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    title={null} footer={null}
                >
                    <ImageDetails saveBtn={this.props.saveBtn} saveImage={this.saveImage} image={this.state.image} />
                </Modal>

            </div>
        )
    }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(list)
