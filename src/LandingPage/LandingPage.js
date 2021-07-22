import React, { Component } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Dropdown, DropdownButton, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import './LandingPage.css';
import { Contens } from '../Component/Contens';


export default class LandingPage extends Component {

    state = {
        news: []
    }

    getNewsApi = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=8b39993c38ff4953b46fa486f60b95ae`)
        .then((result) => {
        // console.log(result.data);
        this.setState({
            news: result.data
        })
        console.log(this.state.news.articles);
        })
    }


    // Get Data All
    componentDidMount() {
    this.getNewsApi();
    }

    render() {

        return (
            <div>
                <header>
                    <div class="container pb-2">
                        <div class="row">
                        <div class="col-4"> 
                        <img src={"img/logo.JPG"}  width="410" alt="" />
                        </div>

                        <div class="col-4 mt-3 "> 
                        <img src={"img/logo2.JPG"}  alt="" />
                        </div>
                        

    
                        </div>
                    </div>
                </header>
                <header>
                
                <div class="col-12" style={{ marginTop:'1px' }}>
                    <nav> 
                        <div class="container">
                        <div class="row">
                            <div class="col-8 navbar">
                                <div>
                                <a href=""> About Us</a>
                                </div>
                                <a href="" style={{ color:'red' }}> Article</a>
                                <a href=""> Multimedia</a>
                                <a href=""> Tech Event</a>
                                <a href=""> Kursus Online</a>
                                <a href=""> Prakerja</a>
                                <a href="" style={{ color:'red' }}> Belajar Cripto</a>
                            </div>
                            <div class="col-2">


                            </div>

                            <div class="col-1 mt-3 "  style={{position:'absolute', right:'0' }}>
                            {/* <input /> */}
                            <img src={"img/cari.png"} width="15" />

                            </div>
                        </div>

                        </div>
                        
                    </nav>
                </div>
                </header>

                <div class="content mt-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-8 berita text-center text-bold " style={{ backgroundColor:'#F9F9F9', height:'50%', marginLeft:'-60px', marginRight:'11px' }}>
                                <div class="row">  
                                    <Card>
                                        <Card.Body><span style={{ fontWeight:'bold' }}> CATEGORY - IOT </span></Card.Body>
                                    </Card>
                                </div>
                                <div class="row mt-3 " >  
                                
                                {
                                this.state.news.articles && this.state.news.articles.map(news => {
                                    return <Contens key={news.id} data={news}  />
                                })
                                }
                                <div class="col-12">
                                    <a class="btn btn-danger">Load more</a>
                                </div>
                                </div>
                            </div>

                            {/* <div class="col-1"></div> */}
                            <div class="col-3" style={{ marginRight:'-45px' }} >
                                <div class="event mb-4">
                                    <Card>
                                        <p class="text-center mt-2">LIVE KAMIS, 50 JUNI 2021</p>
                                        <img src={"img/event1.jpg"} width="100%"/>
                                    </Card>
                                </div>

                                <div class="event mb-4 ">
                                    <Card>
                                        <p class="text-center mt-2">NEXT EVENT ??</p>
                                        <img src={"img/event2.jpg"} width="100%"/>
                                    </Card>
                                </div>

                                <div class="event mb-4">
                                    <Card>
                                        <p class="text-center mt-2">BELAJAR CRYPTO DARI AWAL S.D MAHIR</p>
                                        <img src={"img/event3.png"} width="100%"/>
                                    </Card>
                                </div>

                                <div class="event mb-4">
                                    <Card>
                                        <p class="text-center mt-2">KURSUS ONLINE</p>
                                        <img src={"img/event4.jpg"} width="100%"/>
                                    </Card>
                                </div>

                                <div class="event mb-4 text-center">
                                    <Card>
                                        <p class="text-center mt-2">CATEGORIES</p>
                                        <Card.Body>
                                            <InputGroup className="ml-4">
                                                <DropdownButton
                                                variant="outline-secondary"
                                                title="Dropdown"
                                                id="input-group-dropdown-1"
                                                >
                                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                                </DropdownButton>
                                            </InputGroup>
                                        </Card.Body>
                                    </Card>
                                </div>

                                <div class="event mb-4 mb-3 " >
                                    <Card>
                                        <p class="text-center mt-2">POS POS TERBARU</p>
                                        <ListGroup variant="flush" style={{fontSize:'15px', fontWeight:'200', padding:'9px' }}>
                                            <ListGroup.Item style={{ backgroundColor: '#F9F9F9' }}>
                                                <p>Virtual Tech Talk Session Interview</p>
                                                <p style={{color:'#c4c4c4'  }}>29/06/2021</p>
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{ backgroundColor: '#F9F9F9' }}>
                                                <p>Pengen Punya HP 5G Murah?</p>
                                                <p style={{color:'#c4c4c4'  }}>29/06/2021</p>
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{ backgroundColor: '#F9F9F9' }}>
                                                <p>Indonesia Bebas Karbon! NFC Indonesia Gandeng SiCepat Masuk Bisnis Electric Vehicle (EV)</p>
                                                <p style={{color:'#c4c4c4'  }}>29/06/2021</p>
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{ backgroundColor: '#F9F9F9' }}>
                                                <p>Berantas Kejahatan Cyber & Narkoba, Diam-Diam FBI Buat Sistem Ini</p>
                                                <p style={{color:'#c4c4c4'  }}>29/06/2021</p>
                                            </ListGroup.Item>
                                            <ListGroup.Item style={{ backgroundColor: '#F9F9F9' }}>
                                                <p>Kecanduan Kripto Bisa Sebabkan Tindak Kriminal? Serius ?</p>
                                                <p style={{color:'#c4c4c4'  }}>29/06/2021</p>
                                            </ListGroup.Item>
                                            
                                        </ListGroup>
                                    </Card>
                                </div>
                                
                            </div>
                        </div>
                        


                    </div>


                </div>

                <div class="mt-4" style={{ height:'100px', marginTop:'100px', backgroundColor: '#3b444b', marginBottom:'-40px' }}>

                </div>


                <footer class="mt-2 pt-3" style={{ height:'57px', fontSize:'12px', backgroundColor: '#232b2b', color:'red' }}>
                    <div class="container">
                        <p>
                            Copyright © 2021 Tugas-baba
                        </p>
                    </div>
                </footer>


            </div>
        )
    }
}
