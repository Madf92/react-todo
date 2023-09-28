function TodoItem({ text, completed}) {
    return (
        <li>
          <span>
            {!completed ? '👎' : '👍'}
          </span>
          <span>{
            completed ?
            <s>{text}</s> :
            text
          }</span>
        </li>
    );
  }


    export {TodoItem};