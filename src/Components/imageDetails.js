import React, { Component } from 'react'
import { Avatar, Button } from 'antd'

export default class ImageDetails extends Component {
    render() {
        let { url, name,des } = this.props.image
        return <div>

            <div style={{ marginBottom: 30, width: '100%' }}>
                <Avatar size="large" alt={name} src={url} />
                <span className='userName'>{name}</span>

                {this.props.saveBtn && <div className='divRight'>
                    <Button onClick={ this.props.saveImage} className='saveBtn'>Save</Button>
                </div>}
            </div>

            <div style={{ maxWidth: '90%', margin: '20px auto' }}>
                <img style={{ width: '100%' }} src={url} />
            </div>
            <p style={{ margin: '10px 30px' }}> {des} </p>

        </div>
    }
}
