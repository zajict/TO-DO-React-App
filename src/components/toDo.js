import {useState, useEffect} from 'react';
import './toDo.css'

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isAllCompleted, setIsAllCompleted] = useState(false);
  const [percentage, setPercentage] = useState(0);
 
  const onChangeIsCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  const onChangeIsAllCompleted = (todos) => {
    const checkedAll = todos.map((todo) => {
      if(todo.completed === false) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
    setTodos(checkedAll);
  }

  useEffect(() => {
    const isAllCompletedUpdated = todos.every((todo) => todo.completed);
    setIsAllCompleted(isAllCompletedUpdated);
  },[todos])

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.todos);
      });
  }, []);


  return (
    <div className="main">
        {todos.map((todo) => {
            return (
                <div key={todo.id} className='todo'>
                    <input type='checkbox' checked={todo.completed} onChange={() => onChangeIsCompleted(todo.id)}/>
                    <span>{todo.todo}</span>
                </div>
            );
        })}
        <div className='check-all'>
          <div className='to-do-area'>
            <input type='checkbox' checked={isAllCompleted} onChange={() => onChangeIsAllCompleted(todos)}/>
          </div>
          <div className='check-all-title'>Complete all tasks</div>
        </div>
    </div>
  )
};