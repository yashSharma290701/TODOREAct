import { useState } from 'react';
import './Form.css';
import Button from 'react-bootstrap/Button';
function Form(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
          setTasks([...tasks, { id: Date.now(), text: newTask }]);
          setNewTask("");
        }
      };
      const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
      };
      const editTask =(taskId)=>{
        var updatedTask = prompt('Enter edited task ')
        setTasks([{text: updatedTask}]);
      }
    return(
        <div>
            <div className="MainArea">
           <input type="text"  placeholder="Write TODO"  value={newTask}  onChange={(e) => setNewTask(e.target.value)}
        />
           <Button variant="warning" onClick={addTask}>ADD</Button>{' '}
            </div>
            <ul className="task-list">
        {tasks.map((task) => ( 
          <li  className="listItems" key={task.id}>
            <p>{task.text}</p>
            <div>
            <Button variant="danger" onClick={()=>deleteTask(task.id)}>Delete</Button>{' '}
            <Button variant="primary" onClick={()=>editTask(task.id)}>Edit</Button>{' '}
            </div>
          </li>
        ))}
      </ul>
        </div>
    )
}
export default Form;