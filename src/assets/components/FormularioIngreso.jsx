import { useState } from "react";
import { nanoid } from "nanoid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormularioIngreso = ({ setListaColaboradores, listaColaboradores }) => {
  // Estados del formulario
  const [nombreColaborador, setNombreColaborador] = useState("");
  const [correoColaborador, setCorreoColaborador] = useState("");

  // función al enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setListaColaboradores([
      ...listaColaboradores,
      {
        nombre: nombreColaborador,
        correo: correoColaborador,
        completada: false,
        id: nanoid(),
      },
    ]);
    setNombreColaborador("");
    setCorreoColaborador("");
  };

  return (
    <Form onSubmit={handleSubmit} className="alert alert-secondary p-3 m-3">
      <Form.Group className="d-flex flex-column">
        <label htmlFor="">Nombre del colaborador</label>
        <input
          type="text"
          name="nombreColaborador"
          onChange={(e) => setNombreColaborador(e.target.value)}
          className="m-2 p-1"
          placeholder="Nuevo colaborador"
          value={nombreColaborador}
        />
        <label htmlFor="">Correo del colaborador</label>
        <input
          type="email"
          name="correoColaborador"
          onChange={(e) => setCorreoColaborador(e.target.value)}
          className="m-2 p-1"
          placeholder="Correo electrónico"
          value={correoColaborador}
        />
        <Button className="btn btn-sm btn-primary me-auto" type="submit">
          Agregar
        </Button>
      </Form.Group>
    </Form>
  );
};

export default FormularioIngreso;
