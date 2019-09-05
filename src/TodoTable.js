import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


const TodoTable = (props) => {
    const columns = [ 
        {
          Header: "Time",
          accessor: "date"
        },
        {
          Header: "Todos",
          accessor: "description"
        },
        {
          Header: "Delete",
          Cell: row => (
            <button onClick={() => props.clicked(row)}>Delete</button>
          )
        },
      ];
      return (
        <div>
          <ReactTable 
            data={props.todos}
            columns={columns}
            sortable={true}
            defaultPageSize={10}            
          />
        </div>
      );
    };
/*return (
<div>
    
<table>
            <tbody>
                <tr><th>Date</th><th>Description</th></tr>
                {props.todos.map(function(todo, idx) {
                    return (
                    <tr key={idx} style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
                        <td>{todo.date}</td>
                        <td>{todo.description}</td>
                        <button className="delete-todo" onClick={() => props.clicked(idx)}>X</button>
                        <button onClick={() => props.completeTodo(idx)}>Complete</button> 
                    </tr>)
                })}
              
                
            </tbody>
        </table>

</div>
);
}*/
export default TodoTable;