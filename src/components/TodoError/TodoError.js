import React from "react";

import "./TodoError.css";

function TodoError({ error }) {
    return <p className="TodoError">Error: {error}</p>;
    }

export { TodoError };