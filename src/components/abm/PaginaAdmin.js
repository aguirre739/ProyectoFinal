import React, { Fragment, useState } from "react";
import { Container, Col, Row, Nav, Badge, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
import Spinner from "../common/Spinner";
import ListaCategorias from "./abmCategorias/ListaCategorias";
import ListaNoticias from "./abmNoticias/ListaNoticias";

const PaginaAdmin = (props) => {
  const [opc, setOpc] = useState("cat");
  const [loader, setLoader] = useState(false);

  const handleOpc = (opcion) => {
    setTimeout(() => {
      setOpc(opcion);
      setLoader(false);
    }, 1000);
  };

  const cargarOpcion = () => {
    if (loader === true) {
      return <Spinner></Spinner>;
    } else {
      if (opc === "cat") {
        return (
          <ListaCategorias
            categorias={props.listaCategorias}
            setRecargarPagina={props.setRecargarPagina}
          ></ListaCategorias>
        );
      } else {
        return (
          <ListaNoticias
            noticias={props.listaNoticias}
            setRecargarPagina={props.setRecargarPagina}
            // consultarNoticias={props.consultarNoticias}
          ></ListaNoticias>
        );
      }
    }
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <div className="bg-info text-light d-flex justify-content-center align-items-start py-2 my-2 w-100">
            <h4 className="mr-1">Página de Administración</h4>
            <p>
              <Badge variant="dark">vBeta</Badge>
            </p>
          </div>
        </Row>
      </Container>
      <Container>
        <Row className="my-3">
          <h5 className="ml-1 lead">Bienvenidos NOMBRE DE USUARIO,</h5>
        </Row>
        <hr></hr>
        <Row className="d-flex justify-content-between">
          <div className=" ">
            <Nav variant="pills" defaultActiveKey="/admin">
              <Nav.Item>
                <Button
                  className="btn btn-info mr-1 mb-2"
                  onClick={() => {
                    handleOpc("cat");
                    setLoader(true);
                  }}
                >
                  Categorias
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button
                  className="btn btn-info mr-1"
                  onClick={() => {
                    handleOpc("not");
                    setLoader(true);
                  }}
                >
                  Noticias
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button className="btn btn-info mr-1" disabled>
                  Usuarios
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button className="btn btn-info " disabled>
                  Metricas
                </Button>
              </Nav.Item>
            </Nav>
          </div>
          <div>
            <Link to={"/noticia/nueva"} className="btn btn-success ml-4">
              Agregar Noticia
            </Link>
            <Link to={"/categoria/nueva"} className="btn btn-success mx-2">
              Agregar Categoria
            </Link>
          </div>
        </Row>
        <hr></hr>
        <section className="">{cargarOpcion()}</section>
      </Container>
    </div>
  );
};

export default withRouter(PaginaAdmin);
