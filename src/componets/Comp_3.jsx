import React, { Component } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import FF_1 from "../images/FF_1.png"


export class Comp_3 extends Component {
    render() {

        
       
        return (
            
            <Parallax pages={2} scrolling={true} vertical ref={ref => (this.parallax = ref)}>

                {/* <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: `url(${FF_1})`, backgroundSize: 'cover' }} /> */}


                <ParallaxLayer offset={0} speed={1} factor={3} style={{ backgroundColor: 'black' }} >
                    HI
                    </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: 'navy' }} >
                    HI
                    </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: 'red' }} >
                    HI AGAIN
                    </ParallaxLayer>

            </Parallax>


        )
    }
}

export default Comp_3

const divStyle = {
    backgroundColor: 'navy',
    color: 'blue',
    textAlign: 'center'
}