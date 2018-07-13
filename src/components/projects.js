import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component {

    render() {
        return(
            <div className="projects">
                <Grid>
                    <Cell col={12}>
                        <div className="projects-grid">
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className='cardTitle-img' style={{color: '#fff', height: '270px', background: 'url(https://www.setaswall.com/wp-content/uploads/2017/05/Minimalist-Wallpaper-24-1620-x-2880.jpg) center / cover'}}></CardTitle>
                                <h4 style={{ color: '#000', textAlign: 'center' }}>Hoook</h4>
                                <CardText style={{ height: '60px' }}>
                                A social, media-based application where users can put other users “on the hook” to check out selected media such as movies, tv, music, books, and games 
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
                                <CardTitle className='cardTitle-img' style={{color: '#fff', height: '270px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTe-P6PAfDQ4vCRBkHdqez-vjWAJLR4S1f_R1jHbiUlpyDM98CwA) center / cover'}}></CardTitle>
                                <h4 style={{ color: '#000', textAlign: 'center' }}>Clicks of Doom</h4>
                                <CardText style={{ height: '60px' }}>
                                A game where the user must click each image on the board only once and each time an image is clicked, the board shuffles
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/mjplein/clicksofdoom" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub</Button>
                                    </a>
                                    <a href="https://mjplein.github.io/clicksofdoom/" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Demo</Button>
                                    </a>
                                </CardActions>
                            </Card>
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className='cardTitle-img' style={{color: '#fff', height: '270px', background: 'url(https://r.hswstatic.com/w_907/gif/podcasts/missedinhistory-podcasts-wp-content-uploads-sites-99-2015-09-Lisztomania-P-660x357.jpg) center / cover'}}></CardTitle>
                                <h4 style={{ color: '#000', textAlign: 'center' }}>Liszt-Worthy</h4>
                                <CardText style={{ height: '60px' }}>
                                A music discovery application that lets users search for an artist or song and returns a list of artists or songs that are similar 
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/mjplein/lisztworthy" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub</Button>
                                    </a>
                                    <a href="https://liszt-worthy.herokuapp.com/index.html" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Demo</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="projects-grid">
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className='cardTitle-img' style={{color: '#fff', height: '270px', background: 'url(https://i.pinimg.com/736x/07/ac/a6/07aca63477d307c4395da8b8cc53cf94--ek-success-handmade-crafts.jpg) center / cover'}}></CardTitle>
                                <h4 style={{ color: '#000', textAlign: 'center' }}>SeussMe</h4>
                                <CardText style={{ height: '60px' }}>
                                    What kind of Seuss are you? Well take this quiz, it's time you do!
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/mjplein/BroBroker" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub</Button>
                                    </a>
                                    <a href="https://brobroker.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Demo</Button>
                                    </a>
                                </CardActions>
                            </Card>
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle className='cardTitle-img' style={{color: '#fff', height: '270px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTav_CcmifdzTzDH0PzKw-S4dE6bWH0g86vS5PFFwX9Q7AfGK3c) center / cover'}}></CardTitle>
                                <h4 style={{ color: '#000', textAlign: 'center' }}>Gif This</h4>
                                <CardText style={{ height: '60px' }}>
                                    Browsing gifs for fun? Stop by here, type in what gifs you're lookin for and see what pops up! 
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/mjplein/GifApp" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub</Button>
                                    </a>
                                    <a href="" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Live Demo</Button>
                                    </a>
                                </CardActions>
                            </Card>
                            {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
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
                            </Card> */}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;
