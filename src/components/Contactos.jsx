import React, { useEffect, useReducer, useState } from "react";
import TablaContactos from "./TablaContactos";
import Formularioadd from "./Formularioadd";
import { ContactosReducer } from "../reducers/ContactosReducer";

const init = () => {
  const infocontactos = localStorage.getItem("infocontactos");
  return infocontactos ? JSON.parse(infocontactos) : [];
};

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, [], init);
  const [formView, setFormView] = useState(false);

  useEffect(() => {
    localStorage.setItem("infocontactos", JSON.stringify(state));
  }, [state]);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center mb-4">
        <button
          onClick={() => setFormView(!formView)}
          className="btn btn-lg custom-btn"
          style={{
            background: "linear-gradient(45deg, #4e54c8, #8f94fb)",
            color: "white",
            border: "none",
            padding: "12px 30px",
            borderRadius: "30px",
            boxShadow:
              "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
            transition: "all 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "translateY(-2px)")}
          onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
        >
          {formView ? (
            <>
              <i className="bi bi-dash-circle me-2"></i>
              Cerrar Formulario
            </>
          ) : (
            <>
              <i className="bi bi-plus-circle me-2"></i>
              Agregar un nuevo Contacto
            </>
          )}
        </button>
      </div>

      {formView && <Formularioadd dispatch={dispatch} />}

      <TablaContactos Contactos={state} dispatch={dispatch} />
    </div>
  );
};

export default Contactos;
