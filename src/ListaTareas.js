import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas, borrarTarea, setTareas, setModoEdicion }) => {
  return (
    <div>
      <h1 className='text-end'>Lista de tareas</h1>
      {tareas.length > 0 ? (
        tareas.map((el) => (
          <Tarea
            key={el.id}
            tarea={el}
            tareas={tareas}
            borrarTarea={borrarTarea}
            setTareas={setTareas}
            setModoEdicion={setModoEdicion}
          />
        ))
      ) : (
        <div className='text-center alert alert-info fs-5'>
          Sin tareas pendientes
        </div>
      )}
    </div>
  );
};

export default ListaTareas;
