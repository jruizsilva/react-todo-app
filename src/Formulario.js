import React, { useState, useEffect } from 'react';

const initialForm = {
  title: '',
  description: '',
};

const Formulario = ({
  agregarTarea,
  modoEdicion,
  setModoEdicion,
  editarTarea,
}) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (modoEdicion) {
      setForm(modoEdicion);
    } else {
      setForm(initialForm);
    }
  }, [modoEdicion]);

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [key]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.title.trim() === '') {
      setError(true);
      return;
    }

    if (modoEdicion) {
      editarTarea(form);
      setSuccessMessage('Editado correctamente');
    } else {
      setSuccessMessage('Agregado correctamente');
      agregarTarea({ ...form, id: Date.now() });
      setForm(initialForm);
    }
    setError(null);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000);
  };

  return (
    <div>
      <h2 className='fs-1 text-end text-sm-center'>
        {modoEdicion ? 'Editar tarea' : 'Nueva tarea'}
      </h2>
      <form className='form' onSubmit={handleSubmit} autoComplete='off'>
        {modoEdicion && (
          <button
            className='btn btn-sm btn-warning mb-2'
            onClick={() => setModoEdicion(null)}
          >
            Salir edicion
          </button>
        )}
        <input
          type='text'
          className='form-control mb-2'
          placeholder='Titulo'
          name='title'
          value={form.title}
          onChange={handleInputChange}
        />
        <textarea
          className='form-control'
          placeholder='Descripcion'
          name='description'
          value={form.description}
          onChange={handleInputChange}
        ></textarea>
        <div className='d-grid'>
          <button type='submit' className='btn btn-primary mt-2'>
            {modoEdicion ? 'Actualizar tarea' : 'Agregar tarea'}
          </button>
        </div>
      </form>
      {successMessage && (
        <div className='alert alert-success text-center f-5 mt-2'>
          {successMessage}
        </div>
      )}
      {error && (
        <div className='alert alert-danger text-center f-5 mt-2'>
          Ingrese el titulo de la tarea
        </div>
      )}
    </div>
  );
};

export default Formulario;
