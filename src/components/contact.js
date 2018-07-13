import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <h2>Contact Me</h2>
                        <hr/>
                    </Cell>
                    <Cell col={4}>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fas fa-phone-square" aria-hidden="true" />
                                        (612) 986-8405
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fas fa-envelope" aria-hidden="true" />
                                        mjplein@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fab fa-linkedin" aria-hidden="true" />
                                        matthew-plein
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                    <Cell col={8}>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;