import React, {useState} from 'react'; 
import './App.css';
import TodoTable from './TodoTable'; 


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
  const handleDelete = idx => {
      //const {idx} = e.target.parentElement;
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
        
        <TodoTable todos={todos} 
        clicked={handleDelete}
        />
    
        </div>
    </div>

);
}
export default Todolist; 