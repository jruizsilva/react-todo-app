import React from 'react';

const Tarea = ({ tarea, borrarTarea, tareas, setTareas, setModoEdicion }) => {
  const handleClick = (id) => {
    const changedTareas = tareas.map((el) =>
      el.id === id ? { ...el, completed: !el.completed } : el
    );
    setTareas(changedTareas);
  };

  return (
    <div className='card bg-light mb-2'>
      <div className='card-body'>
        <h3 className='card-title text-end'>
          {tarea.title}
          <button
            onClick={() => handleClick(tarea.id)}
            className={`btn btn-sm ms-2 ${
              tarea.completed ? 'btn-success' : 'btn-warning'
            } `}
          >
            {tarea.completed ? 'Completa' : 'Pendiente'}
          </button>
        </h3>
        <p className='text-end'>{tarea.description}</p>
        <hr />
        <div className='d-flex justify-content-end'>
          <button
            className='btn btn-sm btn-primary'
            onClick={() => setModoEdicion(tarea)}
          >
            Editar
          </button>
          <button
            className='btn btn-sm btn-danger ms-2'
            onClick={() => borrarTarea(tarea.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tarea;
