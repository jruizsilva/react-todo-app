import React, { useState, useEffect } from 'react';
import Formulario from './Formulario';
import ListaTareas from './ListaTareas';

const localTareas = JSON.parse(localStorage.getItem('tareas')) || [];

function App() {
  const [tareas, setTareas] = useState(localTareas);
  const [modoEdicion, setModoEdicion] = useState(null);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const borrarTarea = (id) => {
    setModoEdicion(null);
    const confirmarDelete = window.confirm('¿Desea eliminar la tarea?');
    if (confirmarDelete) {
      const changedTareas = tareas.filter((el) => el.id !== id);
      setTareas(changedTareas);
    }
  };
  const agregarTarea = (tarea) => {
    const changedTareas = [tarea, ...tareas];
    setTareas(changedTareas);
  };
  const editarTarea = (tarea) => {
    const changedTareas = tareas.map((el) => (el.id === tarea.id ? tarea : el));
    setTareas(changedTareas);
  };

  return (
    <div className='container-fluid pt-2 min-vh-100'>
      <div className='row d-flex justify-content-center'>
        <div className='col-10 col-sm-6 col-md-5'>
          <ListaTareas
            tareas={tareas}
            borrarTarea={borrarTarea}
            setTareas={setTareas}
            setModoEdicion={setModoEdicion}
          />
        </div>
        <div className='col-10 col-sm-6 col-md-5 col-lg-4'>
          <Formulario
            modoEdicion={modoEdicion}
            agregarTarea={agregarTarea}
            setModoEdicion={setModoEdicion}
            editarTarea={editarTarea}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
