import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


import "./TodoLoading.css";

function TodoLoading() {
    return( 
        <Skeleton className="TodoItem-loading" count={4}/>
    )
}

export { TodoLoading };