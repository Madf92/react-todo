import './TodoCounter.css';

function TodoCounter({ total, completed}) {
    return (
      <h2 className="tittle">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h2>
    );
  }

    export {TodoCounter};