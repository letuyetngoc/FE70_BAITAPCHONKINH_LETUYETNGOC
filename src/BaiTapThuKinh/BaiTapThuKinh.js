import React, { Component } from 'react'
import GlassesList from './GlassesList'

let glassesList = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]

export default class BaiTapThuKinh extends Component {
    state = {
        glassesItem: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    changeGlasses = (glassesItemClick) => {
        this.setState({
            glassesItem: glassesItemClick
        })
    }
    render() {
        return (
            <div className='try_glasses'>
                <h3 className='text-center title'>TRY CLASSES APP ONLINE</h3>
                <div className='model'>
                    <div className='prototype'>
                        <img src='./glassesImage/model.jpg' height={250} />
                        <img className='glasses_prototype' src={this.state.glassesItem.url} height={40} />
                        <div class="card-img-overlay">
                            <h5 class="card-title">{this.state.glassesItem.name}</h5>
                            <p class="card-text">{this.state.glassesItem.desc}</p>
                        </div>
                    </div>
                    <img src='./glassesImage/model.jpg' height={250} />
                </div>
                <div className='mt-4 classesList'>
                    <GlassesList glassesList={glassesList} changeGlasses={this.changeGlasses} />
                </div>
            </div>
        )
    }
}
