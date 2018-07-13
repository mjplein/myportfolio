import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import teresa from '../images/teresa.jpg';
import levi from '../images/levi.jpg';

class About extends Component {
    
    render() {
        return(
            <div className="aboutMe-page">
                <Grid>
                    <Cell col={12}>
                        <div>
                            {/* <img
                                src={teresa}
                                alt="teresa"
                                className="teresa-pic"
                            />
                            <h3>Teresa Plein</h3> */}
                        </div>
                        <div>
                            {/* <img
                                src={levi}
                                alt="levi"
                                className="levi-pic"
                            />
                            <h3>Levi Plein</h3> */}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;