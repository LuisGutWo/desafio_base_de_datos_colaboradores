const Buscador = ({ setBusquedaColaborador }) => {
  return (
    <>
      <input
        type="text"
        name="busquedaColaborador"
        className="form-control"
        placeholder="Buscar Colaborador"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onChange={(e) => setBusquedaColaborador(e.target.value)}
      />
    </>
  );
};

export default Buscador;
