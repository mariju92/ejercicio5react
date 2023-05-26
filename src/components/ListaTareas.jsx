import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ ListaTareas, borrarTarea }) => {
  return (
    <ListGroup>
      {
        ListaTareas.map((tarea, indice)=> <ItemTarea key={indice} tarea={tarea} borrarTarea={borrarTarea}></ItemTarea> )
      }
      
    </ListGroup>
  );
};

export default ListaTareas;
