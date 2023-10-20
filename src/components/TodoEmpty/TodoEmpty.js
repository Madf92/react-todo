import React from 'react';

import './TodoEmpty.css';

function TodoEmpty({ searchValue }) {
    return (
        <p className="TodoEmpty">
            {`There's not TODO's with the keyword ${searchValue}`}
        </p>
    );
  }

    export { TodoEmpty };