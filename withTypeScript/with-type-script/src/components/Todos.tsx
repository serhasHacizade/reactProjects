import React from "react";

//React.FC defined a type
const Todos: React.FC<{items: string[]}> = (props) => {
  return(
      <ul>{props.items.map(item => <li key={item}>{item}</li>)}</ul>
  ) 
}

export default Todos;
