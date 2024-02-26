import { useState } from "react";
import "../styles/loading.css";

import Titulo from "./Titulo";
import GridIzquierdo from "./GridIzquierdo";

function Formulario() {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState("Enviar formulario");
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    sexo: "masculino", // Definimos un valor por defecto para el sexo
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setButtonText("Enviando formulario...");

    // Imprimir los datos del formulario en la consola
    //console.log("Datos del formulario:", formData);

    // Simulamos un envío de formulario asíncrono
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true); // Actualizar el estado del formulario enviado
      setButtonText("Enviar formulario");
    }, 1500);
  };

  return (
    <div className="row justify-content-md-center">
      <Titulo />
      <GridIzquierdo data={formData} formSubmitted={formSubmitted} />

      <div className="col-md-7 py-5 px-">
        <h2 className="text-center mb-3">Registrar Empleados</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre del Empleado:
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono del Empleado:
            </label>
            <input
              type="number"
              className="form-control"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sexo" className="form-label">
              Sexo del Empleado:
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sexo"
                id="sexoMasculino"
                value="masculino"
                checked={formData.sexo === "masculino"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="sexoMasculino">
                Masculino
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="sexo"
                id="sexoFemenino"
                value="femenino"
                checked={formData.sexo === "femenino"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="sexoFemenino">
                Femenino
              </label>
            </div>
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary btn_add"
              type="submit"
              disabled={loading}>
              {buttonText}
            </button>
          </div>
        </form>

        {loading && (
          <div className="page-loading active">
            <div className="page-loading-inner">
              <div className="page-spinner"></div>
              <span>Enviando formulario...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Formulario;
