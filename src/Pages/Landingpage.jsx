import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  const navigateByUrl = useNavigate()
  return (
    <> 
       <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
            <h1 style={{fontSize:'40px'}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eligendi culpa earum itaque sapiente deleniti dicta inventore id accusamus animi facere error mollitia voluptatum perspiciatis quam ratione rem porro beatae!</p>
            <button onClick={()=>navigateByUrl('/home')} className='btn btn-info mt-4'>Get Started</button>
        </Col>
        <Col lg={5}>
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" />
        </Col>
        <Col></Col>

       </Row>

        <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
          <h3>Features</h3>
          <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
          <Card style={{ width: '22rem' }} className='p-4 bg-warning'>
            <Card.Img variant="top" height={'300px'} width={'300px'} src="https://wallpaper.forfun.com/fetch/63/63da5cd7c95d494cb847c450dcbd1412.jpeg" />
            <Card.Body>
            <Card.Title className='text-primary'>Managing Videos</Card.Title>
            <Card.Text className='text-dark'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            </Card.Body>
          </Card>


          <Card style={{ width: '22rem' }} className='p-4 bg-warning'>
            <Card.Img variant="top" height={'300px'} width={'300px'} src="https://wallpapers.com/images/hd/4k-phone-background-music-doodles-k6yq0b36lk2hljjy.jpg" />
            <Card.Body>
            <Card.Title className='text-primary'>Managing Videos</Card.Title>
            <Card.Text className='text-dark'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            </Card.Body>
          </Card>


          <Card style={{ width: '22rem' }} className='p-4 bg-warning'>
            <Card.Img variant="top" height={'300px'} width={'300px'} src="https://wallpaper.forfun.com/fetch/b1/b10c2b22fc83644699ec4822d102da6b.jpeg" />
            <Card.Body>
            <Card.Title className='text-primary'>Managing Videos</Card.Title>
            <Card.Text className='text-dark'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            </Card.Body>
          </Card>

          </div>
        </div>

        <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">
            <div className="col-lg-5">
                <h4 className='text-warning'>Simple,Powerful & Fast</h4>
                <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus repellendus animi id assumenda corrupti earum. Quidem nulla, eum exercitationem placeat deleniti at. Iste autem amet eaque esse dolorum perspiciatis!
                Iure iste quae animi, illo commodi distinctio sed laboriosam.</h6>

                <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus repellendus animi id assumenda corrupti earum. Quidem nulla, eum exercitationem placeat deleniti at. Iste autem amet eaque esse dolorum perspiciatis!
                Iure iste quae animi, illo commodi distinctio sed laboriosam.</h6>

                <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus repellendus animi id assumenda corrupti earum. Quidem nulla, eum exercitationem placeat deleniti at. Iste autem amet eaque esse dolorum perspiciatis!
                Iure iste quae animi, illo commodi distinctio sed laboriosam.</h6>
            </div>
            <div className="video col-lg-5">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/ccpVpcP8m44" title="Best of Sushin Shyam 2023 | Audio Jukebox | Hits of Sushin Shyam | OST" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
            </div>
        </div>
    </>
  )
}

export default Landingpage