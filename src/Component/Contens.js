import React from 'react';
import { Card, Dropdown, DropdownButton, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import Moment from 'moment';


export const Contens = (props) => {
    return (
        <div>
            <div class="col-12 mt-3" >
                <Card>
                    <div class="row">
                        <div class="col-6">
                            <img src={props.data.urlToImage} width="100%" height="100%" />
                        </div>
                        <div class="col-6 isicontent">
                                <div class="category">
                                    IOT
                                </div>
                                <div class="judul">
                                    <h3>
                                    {
                                        props.data.title
                                    }
                                    </h3>
                                </div>
                                <div class="date" id="date">
                                    <p>oleh : {props.data.author}</p>
                                    <p>
                                    
                                    {
                                        Moment(props.data.publishedAt).fromNow()

                                    }
                                        
                                    
                                    </p>
                                </div>
                        </div>
                    </div>
                </Card>
            </div>

        </div>
    )
}
