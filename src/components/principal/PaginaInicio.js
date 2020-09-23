import React from "react";
import { Container, Carousel, Card, Button, CardImg } from "react-bootstrap";
import Logo from "../../img/publicidad.png";
import CardCategoria from './CardCategoria';


const PaginaInicio = (props) => {
  return (
    <Container className="text-center">

      <hr />
      <hr className="mb-4" />
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-4 mb-2">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/08/26/Recortada/img_asalarich_20200826-095240_imagenes_lv_otras_fuentes_marcha-messi-1200x675-5-364-kB4F-U483089990486wkG-992x558@LaVanguardia-Web.jpg"
                alt="Noticia 1"
              />
              <Carousel.Caption>
                <h3>Noticia 1</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2020/04/11/15865964374752.png"
                alt="Noticia 2"
              />

              <Carousel.Caption>
                <h3>Noticia 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://saltateve.com/public/images/noticias/554-sube-el-dolar-y-aumenta-la-incertidumbre-sobre-el-bcra.jpg"
                alt="Noticia 3"
              />

              <Carousel.Caption>
                <h3>Nombre Noticia 3</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-sm-12 col-md-3 mb-2">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo Noticia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3 mb-5">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo Noticia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3 mb-5">
          <a href="">
            <img
              src="http://www.laprensa.com.ar/Multimedios/Ads/92.gif?v=1"></img>
          </a>
        </div>
        <div className="col-sm-12 col-md-3 mb-5 ">
          <a href="">
            <img
              src="http://www.laprensa.com.ar/Multimedios/Ads/92.gif?v=1"></img>
          </a>
        </div>
        <div className="col-sm-12 col-md-3 mb-5">

          <a href="">
            <img
              src="http://www.laprensa.com.ar/Multimedios/Ads/92.gif?v=1"></img>
          </a>
        </div>
      </div>

      {props.listaCategorias.map((item, pos) => {
        return (<CardCategoria item={item} key={pos} listaNoticias={props.listaNoticias}></CardCategoria>)
      })}
      <hr className="mb-4" />
      <div className="row justify-content-center">
      <div className="col-sm-12 col-md-3 mb-2">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo Noticia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3 mb-2">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo Noticia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3 mb-2">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo Noticia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </div>
      <div className="col-sm-12 col-md-3 mb-3">
        <Card>
          <Button variant="link">
            <CardImg
              src={Logo}
              width="110"
              height="500"
              className="d-inline-block align-top"
              alt="Anuncio"
            />
          </Button>
        </Card>
        </div>
      </div>  

      <hr className="mb-4" />
      <div className="row justify-content-center">
      <div className="col-sm-12 col-md-3 mb-2">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo Noticia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3 mb-2">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo Noticia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3 mb-2">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo Noticia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-3 mb-2">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Titulo Noticia</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Leer más...</Button>
            </Card.Body>
          </Card>
        </div>

      </div>
      <hr className="mb-4" />
      <div className="row justify-content-center">
      <a href="">
            <img
              src="https://tpc.googlesyndication.com/simgad/10495352078616386191"
              className="publicidadLarga"></img>
          </a>
      </div>
      <hr className="mb-4" />
      
      <hr className="mb-4" />
    </Container>
  );
}

export default PaginaInicio;
