import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import mattGuitar from '../images/mattGuitar5.png';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="container">
                            <img
                                src="https://i.pinimg.com/originals/63/65/f4/6365f400045be3aeb831790f1903ce45.png"
                                alt="guitar"
                                className="guitar-img"
                            />
                            <div className="overlay">
                                <img
                                src={mattGuitar}
                                alt="matt-guitar"
                                className="matt"
                                />
                                <h3>Matthew Plein</h3>
                            </div>
                        </div>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer / Guitar Enthusiast</h1>
                            <hr/>
                            <p>HTML | CSS | JavaScript | React | NodeJS | MySQL | Blues | Rock | Jazz</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/matthew-plein" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>
                                <a href="https://github.com/mjplein" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github" aria-hidden="true" />
                                </a>
                                <a href="https://www.facebook.com/matthew.plein.9" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-facebook" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;