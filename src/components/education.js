import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render () {
        return(
            <Grid>
                <Cell col={4}>
                    <img
                        className="school-icon"
                        alt="School Icon"
                        src={this.props.schoolURL}
                    />
                </Cell>
                <Cell col={8}>
                    <h5 style={{ marginTop: '0px'}}>{this.props.schoolName}</h5>
                    <p>{this.props.schoolDescription1}</p>
                    <p>{this.props.schoolDescription2}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;