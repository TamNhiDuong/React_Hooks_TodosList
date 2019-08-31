import React, {useState} from 'react'; 
import './App.css';


const Todolist = () => {
const [listItem, setListItem] = useState({
    date: "",
    description: ""
});

const [todos, setTodos] = useState([]);

//Include the existing state with ...listItem to NOT overwrite it
const inputChanged = (event) => {
    const value = event.target.value;
    setListItem({
        ...listItem,
        [event.target.name]: value
    });
};

const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, listItem]);
};
//const addTodo = e => {
  //  e.preventDefault();
    //console.log(listItem.date, listItem.description);
  //};
  const handleDelete = e => {
      const {idx} = e.target.parentElement;
      todos.splice(idx, 1)
      setTodos([...todos]); 
  }

return (
    <div>
        <div className="form">
        <form onSubmit={addTodo}>
            <lable>
                Date:
            <input type="text" name = "date" value={listItem.date} onChange={inputChanged} />
            </lable>

            <lable>
                Description:
                <input type="text" name = "description" value={listItem.description} onChange={inputChanged} />
            </lable>
           
            <input type="submit" value="Add"/>
        </form>
        </div>

        <table>
            <tbody>
                {todos.map(function(list, idx) {
                    return (<tr key={idx}>
                        <td>{list.date}</td>
                        <br></br>
                        <td>{list.description}</td>
                        <button className="delete-todo" onClick={handleDelete}>X</button>
                        </tr>)
                })}
              
                
            </tbody>
        </table>

    </div>
    
        
    
);
}
export default Todolist; 