import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'

export class Comp_2 extends Component {
    render() {
        return (
            <div>
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1}}
                    config={{delay:1000, duration: 1000}}
                >
                    {props => (
                        <div style={props}>
                            <div style={c2Style}>
                                <h1>Section 1</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, quam quod aliquid suscipit obcaecati dolorem corrupti eveniet accusantium deserunt molestias sit voluptates ab, doloremque adipisci sequi. Nam, harum cum. Aspernatur!</p>
                            </div>

                        </div>

                    )}


                </Spring>
            </div>
        )
    }
}

export default Comp_2

const c2Style = {
    background : 'slateblue',
    color: 'white',
    padding: '1.5rem'
}
