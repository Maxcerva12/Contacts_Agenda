import React, { useState } from "react";

const TablaContactos = ({ Contactos = [], dispatch }) => {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ Nombre: "", Numero: "" });

  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const handleEdit = (contacto) => {
    setEditingId(contacto.id);
    setEditForm({ Nombre: contacto.Nombre, Numero: contacto.Numero });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "edit",
      payload: { id: editingId, ...editForm },
    });
    setEditingId(null);
    setEditForm({ Nombre: "", Numero: "" });
  };

  const handleInputChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div
        className="card"
        style={{
          boxShadow: "10px 10px 20px #babecc, -10px -10px 20px #ffffff",
        }}
      >
        <div className="card-body">
          <h2 className="card-title mb-4">Lista de Contactos</h2>
          {Contactos.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-person-x fs-1 text-muted mb-3"></i>
              <p className="lead">No hay contactos en la agenda</p>
              <p className="text-muted">
                Agrega un nuevo contacto para comenzar
              </p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Número</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {Contactos.map((contacto) => (
                    <tr key={contacto.id}>
                      <td>{contacto.id}</td>
                      <td>
                        {editingId === contacto.id ? (
                          <input
                            type="text"
                            name="Nombre"
                            value={editForm.Nombre}
                            onChange={handleInputChange}
                            className="form-control form-control-sm"
                          />
                        ) : (
                          contacto.Nombre
                        )}
                      </td>
                      <td>
                        {editingId === contacto.id ? (
                          <input
                            type="text"
                            name="Numero"
                            value={editForm.Numero}
                            onChange={handleInputChange}
                            className="form-control form-control-sm"
                          />
                        ) : (
                          contacto.Numero
                        )}
                      </td>
                      <td>
                        {editingId === contacto.id ? (
                          <button
                            onClick={handleEditSubmit}
                            className="btn btn-outline-primary btn-sm me-2"
                          >
                            Guardar
                          </button>
                        ) : (
                          <>
                            <button
                              onClick={() => handleDelete(contacto.id)}
                              className="btn btn-outline-danger btn-sm me-2"
                            >
                              Eliminar
                            </button>
                            <button
                              onClick={() => handleEdit(contacto)}
                              className="btn btn-outline-success btn-sm"
                            >
                              Editar
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TablaContactos;
