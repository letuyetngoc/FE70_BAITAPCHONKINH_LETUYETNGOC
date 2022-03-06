import React, { Component } from 'react'
import GlassItem from './GlassItem'

export default class GlassesList extends Component {
    render() {
        let { glassesList } = this.props
        return (
            <div className='row'>
                {glassesList.map((glass, index) => {
                    return <div className='col-2' key={index}>
                        <GlassItem glass={glass} changeGlasses={this.props.changeGlasses} />
                    </div>

                })}
            </div>
        )
    }
}
