import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import NavBar from '../../components/navBar/NavBar';
import { api } from '../../services/Api';
import loadingImg from "../../Images/loadingImg.webp"

import "./home.css"



function Home() {

    const [articles, setArticles] = useState([])
    const [defaltUrl, setDefaltUrl] = useState('/brasil')

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

    //SEARCH
    const [search, setSearch] = useState()

    const searchNews = async () => {
        try {
            const url = '/search'
            const header = {
                "search": search
            }
            
            const res = await api.post(url, header)
            setArticles(res.data.articles);
        } catch (err) {
            console.log(err);
        }
    }

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
                                                <Card.Text><strong>Author: </strong> {art.author || " unknown"}</Card.Text>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>

                            )

                        })}
                    </Row>

                </section>
                <section className='section-right'>
                    <h6>FILTER</h6>
                    <input type="text" onChange={e => setSearch(e.target.value)} />
                    <Button className='section-right_button' onClick={searchNews}>Buscar</Button>

                    <span className='divider'></span>

                    <div className='coutri_div'>
                        <h6>COUNTRI</h6>
                        <ul>
                            <li className='coutris_li' ><button className='button' onClick={() => setDefaltUrl('/brasil')}>Brasil</button></li>
                            <li className='coutris_li' ><button className='button' onClick={() => setDefaltUrl('/argentina')}>Argentina</button></li>
                            <li className='coutris_li' ><button className='button' onClick={() => setDefaltUrl('/venezuela')}>Venezuela</button></li>
                            <li className='coutris_li' ><button className='button' onClick={() => setDefaltUrl('/usa')}>U.S.A</button></li>
                            <li className='coutris_li' ><button className='button' onClick={() => setDefaltUrl('/london')}>London</button></li>
                            <li className='coutris_li' ><button className='button' onClick={() => setDefaltUrl('/ucrania')}>Ucrânia</button></li>
                            <li className='coutris_li' ><button className='button' onClick={() => setDefaltUrl('/russia')}>Russia</button></li>
                        </ul>
                    </div>

                </section>
            </div>






        </>
    )
}

export default Home;