import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";


import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";

const App = () => {
  // Estado lista Colaboradores
  const [listaColaboradores, setListaColaboradores] =
    useState(BaseColaboradores);

  // Estado busqueda Colaborador
  const [busquedaColaborador, setBusquedaColaborador] = useState("");

  // función buscar colaborador
  const handleBuscarColaborador = (e) => {
    e.preventDefault();
    // Comparara el texto con el Array.nombre
  };

  // Función para tareas realizadas
  const modificarColaborador = (colaborador) => {
    const nuevoColaborador = [...listaColaboradores];
    const index = nuevoColaborador.findIndex(
      (el) => el.nombre === colaborador.nombre
    );
    nuevoColaborador[index].completada = true;
    setListaColaboradores(nuevoColaborador);
  };

  return (
    <>
      {/* Buscador de colaboradores */}

      <div className="bg-dark p-3 mb-3">
        <div className="container">
          <form onSubmit={handleBuscarColaborador}>
            <label htmlFor="" className="h5 w-sm-75 w-lg-25 text-center text-light m-0">
              Buscador de Colaboradores
            </label>
            <div className="w-sm-25 w-lg-75 input-group pb-3">
              <Buscador setBusquedaColaborador={setBusquedaColaborador} />
            </div>
          </form>
        </div>
      </div>

      {/* Usando componente Formulario pasandole propiedades al hijo */}
      <div className="container">
        <Formulario
          listaColaboradores={listaColaboradores}
          setListaColaboradores={setListaColaboradores}
        />
      </div>

      {/* Pintando la Lista */}
      <div>
        <h2 className="alert alert-primary h5">Listado de colaboradores</h2>
      </div>
      <ListGroup className="container">
        {listaColaboradores
          .filter((colaborador) => {
            return colaborador.nombre
              .toLowerCase()
              .includes(busquedaColaborador.toLowerCase());
          })

          .map((colaborador) => (
            <ListGroup.Item
              className="d-flex justify-content-center m-1 bg-secondary text-light"
              key={colaborador.nombre}
              style={
                colaborador.completada === true
                  ? { textDecoration: "line-through" }
                  : {}
              }
            >
              {colaborador.nombre} - {colaborador.correo}
              {colaborador.completada === false ? (
                <Button
                  className="ms-auto p-1"
                  variant="dark"
                  size="sm"
                  onClick={() => modificarColaborador(colaborador)}
                >
                  Presente
                </Button>
              ) : (
                ""
              )}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
};

export default App;
