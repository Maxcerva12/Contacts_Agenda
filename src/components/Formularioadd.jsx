import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Formularioadd = ({ dispatch }) => {
  const [data, setData] = useState({ Nombre: "", Numero: "" });

  const { Nombre, Numero } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const generateId = () => {
    const id = uuid().replace(/\D/g, ""); // Elimina todos los caracteres no numéricos
    return parseInt(id.slice(0, 4), 10); // Toma los primeros 4 dígitos y los convierte a número
  };

  const actionAdd = {
    type: "add",
    payload: {
      id: generateId(),
      Nombre,
      Numero,
    },
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (Numero.length === 10 && Nombre !== "") {
      dispatch(actionAdd);
    } else {
      alert("Ingrese el Nombre y el Numero. Por favor, inténtelo de nuevo.");
    }

    setData({ Nombre: "", Numero: "" });
  };

  return (
    <>
      <div className="container mb-5">
        <div
          className="card"
          style={{
            boxShadow: "10px 10px 20px #babecc, -10px -10px 20px #ffffff",
          }}
        >
          <div className="card-body">
            <h2 className="card-title mb-4">Añadir nuevo contacto</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  onChange={handleChange}
                  name="Nombre"
                  value={Nombre}
                  type="text"
                  className="form-control form-control-lg"
                  id="nombre"
                  placeholder="Ingrese el nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="numero" className="form-label">
                  Número
                </label>
                <input
                  onChange={handleChange}
                  name="Numero"
                  value={Numero}
                  type="tel"
                  className="form-control form-control-lg"
                  id="numero"
                  placeholder="Ingrese el número de teléfono"
                />
              </div>
              <button
                onClick={handleAdd}
                type="submit"
                className="btn btn-primary btn-lg w-100"
              >
                Agregar Contacto
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formularioadd;
