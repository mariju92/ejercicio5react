import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

function Formulario() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea('');
  };

  const borrarTarea = (nombreTarea)=> {
let arregloFiltrado= tareas.filter((itemTarea)=> itemTarea !== nombreTarea);
setTareas(arregloFiltrado)
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Tarea">
          <Form.Control
            type="text"
            placeholder="Ingresar Tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
        </Form.Group>
      </Form>
      <ListaTareas ListaTareas={tareas} borrarTarea={borrarTarea}/>
    </section>
  );
}

export default Formulario;
