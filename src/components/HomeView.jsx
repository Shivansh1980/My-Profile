import React, { Component, useEffect } from 'react'
import { animateText, alterTextFontSize} from '../animations'

export class HomeView extends Component {
    componentDidMount() {

        let cssObject = {
            'color': 'green',
            'font-size': '40px',
            'line-height':'50px'
        };
        var introTextIds = animateText("introduction", "backInDown", 5, cssObject);
        animateText("name", "bounce", 3, cssObject);

    }
    render() {
        return (
            <div className="HomeView">
                <div className="firstDiv">
                    <div className="shivanshImage">
                        <div className="my_image">
                            <img src={process.env.PUBLIC_URL + "/static/images/shivansh-2.png"} alt="shivansh" />
                        </div>
                        <h2 id="name" className="name" align="center">Shivansh Shrivastava</h2>
                    </div>
                    <p className="introduction" align="center">
                            Hello, I am Shivansh Shrivastava.
                    </p>
                </div>
                <div className="aboutMe" data-aos="animate-aboutme-text">
                    <h1>About Me</h1>
                    <p className="aboutMeText">
                        I’m proud of my ability to persevere and overcome challenges. 
                        I have the 2 years of programming experience you’re looking for
                        , a track record of successful projects, and proven expertise 
                        in agile development processes. At the same time, I have developed 
                        my communication skills from working directly with my friends,
                        which means I am well prepared to work on high-profile, cross-department projects.
                        I have the experience to start contributing from day one and I am truly excited about
                        the prospect of getting started.
                    </p>
                </div>
            </div>
        )
    }
}
export default HomeView
