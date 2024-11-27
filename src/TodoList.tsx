import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { updateTodo, removeTodo } from './redux/actions';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const statuses = ['Pending', 'In Progress', 'Completed'];
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const [editStatus, setEditStatus] = useState('Pending');

  const handleEdit = (index: number) => {
    setIsEditing(index);
    setEditText(todos[index].text);
    setEditStatus(todos[index].status);
  };

  const handleSave = (index: number) => {
    dispatch(updateTodo({ index, text: editText, status: editStatus }));
    setIsEditing(null);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className={`todo-item ${todo.status.toLowerCase().replace(' ', '-')}`}>
          {isEditing === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <button onClick={() => handleSave(index)} className="save">
                Save
              </button>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <span className={`status ${todo.status.toLowerCase().replace(' ', '-')}`}>
                {todo.status}
              </span>
              <button onClick={() => handleEdit(index)} className="edit">
                Edit
              </button>
            </>
          )}
          <button onClick={() => dispatch(removeTodo(index))} className="delete">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;