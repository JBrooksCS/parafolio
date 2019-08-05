import React from 'react'
import { Spring } from 'react-spring/renderprops'
import me from "../images/me_1.jpg"


export default function Comp_1() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
        >
            {props => (
                <div style={props}>
                    <div style={c1Style}>
                        <div className="headshotDiv" style={{display: 'inline'}}>
                            <img src={me} alt="" style={{width: '10%', display: 'inline'}}/>

                        </div>
                        <h1 className="name">Jason Brooks</h1>
                        <h1 className="title" >Full-Stack Software Developer</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, quam quod aliquid suscipit obcaecati dolorem corrupti eveniet accusantium deserunt molestias sit voluptates ab, doloremque adipisci sequi. Nam, harum cum. Aspernatur!</p>
                        {/* <Spring
                            from={{ number: 0 }}
                            to={{ number: 10 }}
                            config={{duration: 10000}}
                        >
                            {props => (
                                <div style={props}>
                                    <h1 style={counter}>
                                        {props.number.toFixed()}
                                    </h1>
                                </div>
                            )}
                        </Spring> */}
                    </div>
                </div>
            )}
        </Spring>
    )
}

const c1Style = {
    background: 'black',
    color: 'white',
    padding: '1.5rem'
}
const counter = {
    background: '#333',
    color: 'white',
    padding: '1.5rem'
}
