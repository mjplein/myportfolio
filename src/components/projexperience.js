import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class ProjectExperience extends Component {
    render () {
        return(
            <Grid>
                <Cell col={4}>
                    <img
                        className="project-img"
                        alt="Project Image"
                        src={this.props.projURL}
                    />
                </Cell>
                <Cell col={8}>
                    <h5 style={{ marginTop: '0px'}}>{this.props.projName}</h5>
                    <p>{this.props.projRole}</p>
                    <ul>{this.props.projDescription1}</ul>
                    <ul>{this.props.projDescription2}</ul>
                    <ul>
                        <a href={this.props.projDescription3} rel="noopener noreferrer" target="_blank">Live Demo</a>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default ProjectExperience;