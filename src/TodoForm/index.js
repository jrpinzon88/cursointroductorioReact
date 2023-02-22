import React from "react";

import "./TodoForm.css";

function TodoForm({addTodo, setOpenModal}) {
  // Creamos un estado para nuestro nuevo TODO
  const [newTodoValue, setNewTodoValue] = React.useState("");
  // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal


  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  // Función para cerrar el modal
  const onCancel = () => {
    setOpenModal(false);
  };

  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    // Utilizamos nuestra función para añadir nuestro TODO
    addTodo(newTodoValue);
    // Cerramos nustro modal
    setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    setNewTodoValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Ingresa tu nueva Tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="btn btn-outline-success">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
