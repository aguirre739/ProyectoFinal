import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

const AgregarNoticia = () => {
  const [noticiaDestacada, setNoticiaDestacada] = useState(false);
  const [tituloNoticia, setTituloNoticia] = useState("");
  const [descripcionNoticia, setDescripcionNoticia] = useState("");
  const [imagen, setImagen] = useState("");
  const [cuerpoNoticia, setCuerpoNoticia] = useState("");
  const [autorNoticia, setAutorNoticia] = useState("");
  const [fechaNoticia, setFechaNoticia] = useState("");
  const [categoria, setCategoria] = useState("");

  const seleccionarCategoria = (e) => {
    setCategoria(e.target.value);
  };


  return (
    <Container>
      <h2 className="w-100 text-center my-4">Edición de Noticia</h2>
      <hr></hr>
      <Form>
        <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
        <Form.Group className="d-flex">
          <Form.Label>Noticia destacada</Form.Label>
          <p className="mr-1 ml-4">No</p>
          <Form.Check
            type="switch"
            id="destaca"
            checked={noticiaDestacada}
            label="Si"
            onChange={(e) => setNoticiaDestacada(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Título *</Form.Label>
          <Form.Control
            placeholder="Escriba aqui el titulo de la noticia"
            type="text"
            onChange={(e) => setTituloNoticia(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripcion breve *</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            onChange={(e) => setDescripcionNoticia(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen *</Form.Label>
          <Form.Control
            placeholder="Inserte la URL de la imagen"
            type="text"
            onChange={(e) => setImagen(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Cuerpo de la noticia *</Form.Label>
          <Form.Control
            as="textarea"
            rows="10"
            onChange={(e) => setCuerpoNoticia(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Autor *</Form.Label>
          <Form.Control
            placeholder="Nombre del autor de la noticia"
            type="text"
            onChange={(e) => setAutorNoticia(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha *</Form.Label>
          <Form.Control
            placeholder="DD/MM/AAAA"
            type="date"
            onChange={(e) => setFechaNoticia(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="text-center">
          <Form.Label className="w-100">
            <h3>Categoria</h3>
          </Form.Label>
        </Form.Group>
        <div className="text-center mb-4">
          <Form.Check
            inline
            label="Economia"
            type="radio"
            value="economia"
            name="categoria"
            onChange={seleccionarCategoria}
          ></Form.Check>
          <Form.Check
            inline
            label="Espectáculos"
            type="radio"
            value="espectaculo"
            name="categoria"
            onChange={seleccionarCategoria}
          ></Form.Check>
          <Form.Check
            inline
            label="Salud"
            type="radio"
            value="salud"
            name="categoria"
            onChange={seleccionarCategoria}
          ></Form.Check>
          <Form.Check
            inline
            label="Politica"
            type="radio"
            value="politica"
            name="categoria"
            onChange={seleccionarCategoria}
          ></Form.Check>
          <Form.Check
            inline
            label="Tecnología"
            type="radio"
            value="tecnologia"
            name="categoria"
            onChange={seleccionarCategoria}
          ></Form.Check>
          <Form.Check
            inline
            label="Fotografía"
            type="radio"
            value="fotografia"
            name="categoria"
            onChange={seleccionarCategoria}
          ></Form.Check>
          <Form.Check
            inline
            label="Actualidad"
            type="radio"
            value="actualidad"
            name="categoria"
            onChange={seleccionarCategoria}
          ></Form.Check>
          <Form.Check
            inline
            label="Deportes"
            type="radio"
            value="deportes"
            name="categoria"
            onChange={seleccionarCategoria}
          ></Form.Check>
        </div>

        <Button className="w-100 mb-4 " variant="danger" type="submit">
          Guardar Noticia
        </Button>
      </Form>
    </Container>
  );
};

export default AgregarNoticia;
