import React, { Component } from 'react'

export default class GlassItem extends Component {
    render() {
        return (
            <button onClick={() => this.props.changeGlasses(this.props.glass)} className='btn-outline-light'>
                <img src={this.props.glass.url} width={100} />
            </button>
        )
    }
}
