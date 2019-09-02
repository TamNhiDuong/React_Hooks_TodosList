import React from 'react';

const TodoTable = (props) => {
return (
<div>
<table>
            <tbody>
                <tr><th>Date</th><th>Description</th></tr>
                {props.todos.map(function(todo, idx) {
                    return (<tr key={idx}>
                        <td>{todo.date}</td>
                        <td>{todo.description}</td>
                        <button className="delete-todo" onClick={() => props.clicked(idx)}>X</button>
                        </tr>)
                })}
              
                
            </tbody>
        </table>

</div>
);
}
export default TodoTable;