import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle className='cardTitle-img' style={{color: '#fff', height: '176px', background: 'url(http://www.hoook.me/static/media/logoCrop2.3213fd2a.png) center / cover'}}></CardTitle>
                        <CardText>
                            a social, media-based application that allows users to put others "on the hook" to check out chosen media 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" style={{color: 'black'}} />
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle className='cardTitle-img' style={{color: '#fff', height: '176px', background: 'url(http://www.hoook.me/static/media/logoCrop2.3213fd2a.png) center / cover'}}></CardTitle>
                        <CardText>
                            a social, media-based application that allows users to put others "on the hook" to check out chosen media 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" style={{color: 'black'}} />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div><h1>This is MySQL</h1></div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div><h1>This is JavaScript</h1></div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div><h1>This is NodeJS</h1></div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>MySQL</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>NodeJS</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;