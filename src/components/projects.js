import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

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
                        <CardTitle className='cardTitle-img' style={{color: '#fff', height: '270px', background: 'url(https://wmira.gallerycdn.vsassets.io/extensions/wmira/react-playground-vscode/0.0.11/1494599205180/Microsoft.VisualStudio.Services.Icons.Default) center / cover'}}></CardTitle>
                        <CardText style={{ height: '60px' }}>
                            a social, media-based application that allows users to put others "on the hook" to check out chosen media 
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/Team-Chocolate-Chip-Cookies/Hoooked" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <a href="http://www.hoook.me" rel="noopener noreferrer" target="_blank">
                                <Button colored>Live Demo</Button>
                            </a>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle className='cardTitle-img' style={{color: '#fff', height: '270px', background: 'url(https://wmira.gallerycdn.vsassets.io/extensions/wmira/react-playground-vscode/0.0.11/1494599205180/Microsoft.VisualStudio.Services.Icons.Default) center / cover'}}></CardTitle>
                        <CardText style={{ height: '60px' }}>
                            a simple React-built memory game 
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/mjplein/reactClickyGame" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <a href="" rel="noopener noreferrer" target="_blank">
                                <Button colored>Live Demo</Button>
                            </a>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div><h1>This is MySQL</h1><p>projects are coming soon!</p></div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div><h1>This is JavaScript</h1><p>projects are coming soon!</p></div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div><h1>This is NodeJS</h1><p>projects are coming soon!</p></div>
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