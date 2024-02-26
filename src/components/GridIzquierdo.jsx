import PropTypes from "prop-types";
import logoReact from "../assets/imgs/react.png";

function GridIzquierdo({ data, formSubmitted }) {
  //console.log("La data es:", data);

  // Desestructura los datos del formulario
  const { nombre, telefono, sexo } = data;

  return (
    <>
      <div
        className="col-md-5 px-3"
        style={{ borderRight: "1px solid #7366ff" }}>
        <img src={logoReact} className="img-fluid logo" alt="Logo" />

        {/* Renderiza los datos solo si hay datos disponibles */}
        {data && (
          <>
            {formSubmitted && (
              <div className="justify-content-md-start">
                <h2>
                  Datos del Empleado <hr />
                </h2>
                <p className="text-start">
                  <i className="bi bi-person"></i> &nbsp; &nbsp; Empleado:
                  {nombre}
                </p>
                <p className="text-start">
                  <i className="bi bi-telephone"></i> &nbsp; &nbsp; Teléfono:
                  {telefono}
                </p>
                <p className="text-start">
                  <i className="bi bi-person-arms-up"></i> &nbsp; &nbsp; Sexo:
                  {sexo}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

// Define la validación de tipo para la prop 'data'
GridIzquierdo.propTypes = {
  formSubmitted: PropTypes.bool,
  data: PropTypes.object, // No es obligatorio, ya que puedes enviar null
};

export default GridIzquierdo;
