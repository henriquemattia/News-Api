import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navBar/NavBar';

import { api } from '../../services/Api';
import "./home.css"
import loadingImg from "../../Images/loadingImg.webp"

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Home() {

    const [articles, setArticles] = useState([])
    const [defaltUrl, setDefaltUrl] = useState('/home')

    const getProduts = async () => {
        try {
            const url = defaltUrl
            
            const res = await api.get(url)
            setArticles(res.data.articles);
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getProduts()
    }, [defaltUrl])

    console.log(articles)

    return (
        <>
            <NavBar />

            <div className='all'>
                <section className='section-left'>
                    <Row xs={1} md={2} className="g-4">
                        {articles.map((art, index) => {
                            return (
                                <div key={index}>
                                    <Col>
                                        <Card>
                                            <Card.Img variant="top" src={art.urlToImage || loadingImg} />
                                            <Card.Body>
                                                <Card.Title>{art.title}</Card.Title>
                                                <Card.Text>{art.description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>

                            )

                        })}
                    </Row>

                </section>
                <section className='section-right'>
                    <div>
                        <h3>País</h3>
                    </div>

                    <div>
                        <ul>
                            <li><button className='button' onClick={()=> setDefaltUrl('/brazil')}>Brasil</button></li>
                            <li><button className='button' onClick={()=> setDefaltUrl('/usa')}>U.S.A</button></li>
                        </ul>
                    </div>

                </section>
            </div>






        </>
    )
}

export default Home;