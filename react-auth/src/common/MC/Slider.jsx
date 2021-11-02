import React, { Component } from 'react';
import '../../css/employ.css';

function Picture (prop){
    return(
        <img className="slider-pictures" src={prop.link} />
    )
}

function Slide (prop){
    return(
        <div id="slider">
            <div class="slider-content">
                {prop.content}
            </div>
            <div className="picture-list">
                <Picture
                    src={"./picture/Apply-your-job-vacancy.png"}
                />
                 <Picture
                    src={"./picture/Apply-your-job-vacancy.png"}
                />
                 <Picture
                    src={"./picture/Apply-your-job-vacancy.png"}
                />
            </div>
        </div>
    )
}

class Slider extends Component{
    render(){

        return(
           <Slide
               content={"We can leave some pictures, video, GIFs on this space for advertisements"}
           />
        );
    }
}

export default Slider
