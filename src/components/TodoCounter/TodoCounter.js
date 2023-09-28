import './Todocounter.css';

function TodoCounter({ total, completed}) {
    return (
      <h2 className="tittle">
        Has completado {completed} de {total} TODOs
      </h2>
    );
  }

    export {TodoCounter};